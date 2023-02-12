"use strict";
/*
Aufgabe: WiSe 22/23 Endabgabe Feuerwerksimulator
Name: Henning Pils
Matrikel: 269355
Datum: 27.10.2022
Quellen:Großteil Robert Schindler
*/
var Feuerwerksimulator;
(function (Feuerwerksimulator) {
    window.addEventListener("load", async () => {
        let serverRockets = await Feuerwerksimulator.handleLoad();
        serverRockets.forEach(rocket => {
            addRocket(rocket);
        });
    });
    Feuerwerksimulator.canvas = document.getElementById("canvas");
    Feuerwerksimulator.crc2 = Feuerwerksimulator.canvas.getContext("2d");
    Feuerwerksimulator.refreshRate = 10;
    // Globale Variablen für HTML Elemente
    let savedRocketsSelect = document.getElementById("saved-rockets-select");
    let nameInput = document.getElementById("rocket-name");
    let numCirclesInput = document.getElementById("num-circles");
    let colorInput = document.getElementById("explosion-color");
    let sizeInput = document.getElementById("explosion-size");
    let lifetimeInput = document.getElementById("explosion-lifetime");
    let buildRocketButton = document.getElementById("build-rocket-button");
    // Hier sollen die einzelnen abgeschossenen Raketen während ihrer Lebenszeit gespeichert.
    let explosions = [];
    Feuerwerksimulator.canvas.addEventListener("click", createExplosion);
    function createExplosion(_event) {
        // x und y position der maus auf dem canvas werden ausgelesen. Es wird der Offset vom Canvas zum Seitenrand abgezogen
        let x = _event.clientX - Feuerwerksimulator.crc2.canvas.offsetLeft;
        let y = _event.clientY - Feuerwerksimulator.crc2.canvas.offsetTop;
        let explosionPosition = new Feuerwerksimulator.Vector(x, y);
        let explosion = new Feuerwerksimulator.Explosion(explosionPosition, Number(numCirclesInput.value), colorInput.value, Number(sizeInput.value), Number(lifetimeInput.value));
        explosions.push(explosion);
    }
    // Eine Standard Rakete wird initialisiert
    let rockets = [];
    addRocket({ "Standard": { particleAmount: 100, color: "#a34da3", size: 5, lifetime: 5 } });
    // Hier wird die Standardrakete als anfangs gewählte Rakete ausgewählt
    let selectedRocket = rockets[0];
    setInputValuesToSelectedRocket(selectedRocket);
    // füge die Rakete zu dem Raketearray hinzu und zeige die Option an
    function addRocket(_rocket) {
        // Name ist in [], damit auch der string und nicht "_name" als name verwendet wird
        rockets.push(_rocket);
        showRocketsToSelect();
    }
    // speichere die Rakete, wenn auf speichern geklickt wird
    buildRocketButton.addEventListener("click", () => {
        let name = nameInput.value;
        let numCircles = Number(numCirclesInput.value);
        let color = colorInput.value;
        let size = Number(sizeInput.value);
        let lifetime = Number(lifetimeInput.value);
        if (size > 5 || lifetime > 5 || numCircles > 1000) {
            alert("maximal Wert überschritten");
            return;
        }
        if (name) {
            let newRocket = { [name]: { particleAmount: numCircles, color: color, size: size, lifetime: lifetime } };
            addRocket(newRocket);
            // Hier wird die Rakete eventuell direkt an den Server gesendet
            Feuerwerksimulator.saveRocket(newRocket);
        }
        else {
            alert("Gib einen Name ein!");
        }
    });
    // Füge die gespeicherten Raketen dem Auswahlmenü hinzu
    function showRocketsToSelect() {
        savedRocketsSelect.innerHTML = "";
        for (let rocket of rockets) {
            let option = document.createElement("option");
            // Object.keys(rocket)[0] stellt hier den Name der Rakete dar
            option.value = Object.keys(rocket)[0];
            option.text = Object.keys(rocket)[0];
            savedRocketsSelect.add(option);
        }
        // setze die Anzeige auf die letzte Rakete (diese ist auch die am neusten hinzugefügte)
        savedRocketsSelect.value = Object.keys(rockets[rockets.length - 1])[0];
        setInputValuesToSelectedRocket(rockets[rockets.length - 1]);
    }
    // Reagiere auf Änderungen des ausgewählten Elements
    savedRocketsSelect.addEventListener("change", () => {
        let selectedRocket = rockets.find(rocket => Object.keys(rocket)[0] === savedRocketsSelect.value);
        if (selectedRocket) {
            // setze die 
            setInputValuesToSelectedRocket(selectedRocket);
            // Hier könnte man die Eingabefelder mit den Werten der ausgewählten Rakete füllen
            // ...
        }
        else {
            throw new Error("Diese Auswahl existiert nicht.");
        }
    });
    function setInputValuesToSelectedRocket(_rocket) {
        let rocketName = Object.keys(_rocket)[0];
        nameInput.value = rocketName;
        numCirclesInput.value = _rocket[rocketName].particleAmount.toString();
        colorInput.value = _rocket[rocketName].color;
        sizeInput.value = _rocket[rocketName].size.toString();
        lifetimeInput.value = _rocket[rocketName].lifetime.toString();
    }
    setInterval(update, Feuerwerksimulator.refreshRate);
    // Hier werden alle explosions und ihre partikel neu gemalt
    function update() {
        Feuerwerksimulator.crc2.fillStyle = "rgba(50, 50, 50, 0.05)";
        Feuerwerksimulator.crc2.fillRect(0, 0, Feuerwerksimulator.canvas.width, Feuerwerksimulator.canvas.height);
        explosions.forEach((explosion, index) => {
            // Entferne die Rakete, wenn die Lebenszeit vorbei ist
            if (explosion.lifetime == 0) {
                explosions.splice(index, 1);
                index--;
            }
            else {
                explosion.draw();
            }
        });
    }
})(Feuerwerksimulator || (Feuerwerksimulator = {}));
//# sourceMappingURL=scriptn.js.map