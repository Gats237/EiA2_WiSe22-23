/*
Aufgabe: WiSe 2022/23 EIA2 Endabgabe - Firework Simulation
Name: Henning Pils
Matrikel: 269355
Datum: 12.02.2023
Quellen: Robert Schindler 271342
*/


namespace FireworkSimulation {


    //async Funktion wird asynchron aufgerufen und führt weiteren Code aus und wartet bis handle load einen Return liefert
    window.addEventListener("load", async () => {
        let serverRockets: Rocket[] = await handleLoad();
        // Hier werden die Raketen aus dem Server ausgelesen und in die Option des Select Elements geschrieben
        serverRockets.forEach(rocket => {
            
            // Hier wird der Name der Rakete aus dem Objekt ausgelesen und in die Option des Select Elements geschrieben
            addRocket(rocket);
        });
    });


    // Globale Variablen für Canvas 
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
    export let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
    //refreshRate in ms wird bei setInterval verwendet um die Animation zu aktualisieren
    export let refreshRate: number = 10;


    // Globale Variablen für HTML Elemente
    let savedRocketsSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("saved-rockets-select");
    let nameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("rocket-name");
    let numCirclesInput: HTMLInputElement = <HTMLInputElement>document.getElementById("num-circles");
    let colorInput: HTMLInputElement = <HTMLInputElement>document.getElementById("explosion-color");
    let sizeInput: HTMLInputElement = <HTMLInputElement>document.getElementById("explosion-size");
    let lifetimeInput: HTMLInputElement = <HTMLInputElement>document.getElementById("explosion-lifetime");
    let buildRocketButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("build-rocket-button");
    // Hier sollen die einzelnen abgeschossenen Raketen während ihrer Lebenszeit gespeichert.
    let explosions: Explosion[] = []; // hier // ver
    // explosions sind die aktuell abgeschossenen Raketen wenn keine Explosionen vorhanden sind, ist das Array leer// 

    // EventListener für die Buttons 
    canvas.addEventListener("click", createExplosion);

    function createExplosion(_event: MouseEvent): void {
        // x und y position der maus auf dem canvas werden ausgelesen. Es wird der Offset vom Canvas zum Seitenrand abgezogen
        let x: number = _event.clientX - crc2.canvas.offsetLeft;
        let y: number = _event.clientY - crc2.canvas.offsetTop;

        let explosionPosition: Vector = new Vector(x, y);
        let explosion: Explosion = new Explosion(explosionPosition, Number(numCirclesInput.value), colorInput.value, Number(sizeInput.value), Number(lifetimeInput.value));

        // push() fügt ein Element am Ende des Arrays hinzu
        explosions.push(explosion); // ist nur gefüllt, wenn etwas auf dem Canvas passiert ( mindestens ein Partikel lifetime beistzt)
    }

    // Eine Standard Rakete wird initialisiert
    let rockets: Rocket[] = []; // Array mit auswählbaren Raketen

    // Hier wird die Standardrakete als anfangs gewählte Rakete ausgewählt
    addRocket({ "Standard": { particleAmount: 100, color: "#a34da3", size: 5, lifetime: 5 } });

    let selectedRocket: Rocket = rockets[0];
    setInputValuesToSelectedRocket(selectedRocket);

    // füge die Rakete zu dem Raketearray hinzu und zeige die Option an
    // wird von der Funktion showRocketsToSelect() aufgerufen
    function addRocket(_rocket: Rocket): void {
        // Name ist in [], damit auch der string und nicht "_name" als name verwendet wird
        rockets.push(_rocket);
        showRocketsToSelect();
    }

    // speichere die Rakete, wenn auf speichern geklickt wird
    buildRocketButton.addEventListener("click", () => {
        let name: string = nameInput.value;
        let numCircles: number = Number(numCirclesInput.value); // HTML Elemente geben immer einen string zurück, deshalb muss der Wert in eine Zahl umgewandelt werden
        let color: string = colorInput.value;
        let size: number = Number(sizeInput.value); // HTML Elemente geben immer einen string zurück, deshalb muss der Wert in eine Zahl umgewandelt werden
        let lifetime: number = Number(lifetimeInput.value); // HTML Elemente geben immer einen string zurück, deshalb muss der Wert in eine Zahl umgewandelt werden
        if (size > 5 || lifetime > 5 || numCircles > 1000) {
            alert("maximal Wert überschritten");
            return;
        }
        if (name) {
            // Hier wird die Rakete als Objekt erstellt 
            let newRocket: Rocket = { [name]: { particleAmount: numCircles, color: color, size: size, lifetime: lifetime } };
            // Hier wird die Rakete dem Auswahlmenü hinzugefügt
            addRocket(newRocket);
            // Hier wird die Rakete eventuell direkt an den Server gesendet
            saveRocket(newRocket);
        } else {
            // Wenn kein Name eingegeben wurde, wird eine Fehlermeldung ausgegeben
            alert("Gib einen Name ein!");
        }
    });

    // Füge die gespeicherten Raketen dem Auswahlmenü hinzu
    function showRocketsToSelect(): void {
        savedRocketsSelect.innerHTML = ""; // Lösche alle Optionen im Select Element
        for (let rocket of rockets) { // wir definieren hier eine Variable rocket, die jedes Element des Arrays rockets enthält
            // rocket ist ein Objekt mit einem Key und einem Value
            let option: HTMLOptionElement = document.createElement("option"); // erstelle ein neues HTML Element vom Typ Option
            // Object.keys(rocket)[0] stellt hier den Name der Rakete dar
            // Value wird hier der Name der Rakete gesetzt
            option.value = Object.keys(rocket)[0]; // Object.keys gibt ein Array mit allen Keys des Objekts zurück // hier wird der Name der Rakete als Value gesetzt
            option.text = Object.keys(rocket)[0]; // hier wird der Name der Rakete als Text angezeigt
            // Füge die Option dem Select Element hinzu
            savedRocketsSelect.add(option); //add selbe Funktion wie push für HTML Elemente
        }

        // setze die Anzeige auf die letzte Rakete (diese ist auch die am neusten hinzugefügte)
        savedRocketsSelect.value = Object.keys(rockets[rockets.length - 1])[0];
        //letzte hinzugefügt Rakete wird als aktuelle Rakete gesetzt
        setInputValuesToSelectedRocket(rockets[rockets.length - 1]);
    }

    // Reagiere auf Änderungen des ausgewählten Elements
    savedRocketsSelect.addEventListener("change", () => {
        // Finde die ausgewählte Rakete in dem Array mit allen Raketen// Key ist immer null, weil es nur einen Key gibt 
        let selectedRocket: Rocket | undefined = rockets.find(rocket => Object.keys(rocket)[0] === savedRocketsSelect.value); 
        // jier wird die ausgewählte Rakete gesucht und in selectedRocket gespeichert und
        // for loop mit boolean expression
       // rocket.find funktioniert wie ein for loop, aber es wird nur ein Element zurückgegeben // stackoverflow.com/questions/2641347/how-to-shorten-this-boolean-expression
        // Wenn die Rakete existiert (undefined ist ein falscher Wert)
        if (selectedRocket) {
            // Hier wird die ausgewählte Rakete als aktuelle Rakete gesetzt
            setInputValuesToSelectedRocket(selectedRocket);
            // Hier könnte man die Eingabefelder mit den Werten der ausgewählten Rakete füllen
            // ...
        } else {
            // Wenn die Rakete nicht existiert, wird eine Fehlermeldung ausgegeben
            throw new Error("Diese Auswahl existiert nicht.");
        }
    });


    // Hier werden die Werte der ausgewählten Rakete in die Inputfelder geschrieben
    function setInputValuesToSelectedRocket(_rocket: Rocket): void {
        // rocket ist ein Objekt mit einem Key und einem Value
        let rocketName: string = Object.keys(_rocket)[0]; // Ist der Name der Rakete es gibt immer nur einen Key
        nameInput.value = rocketName;
        numCirclesInput.value = _rocket[rocketName].particleAmount.toString(); //HTML Elemente geben immer einen string zurück, deshalb muss der Wert in eine Zahl umgewandelt werden
        colorInput.value = _rocket[rocketName].color;
        sizeInput.value = _rocket[rocketName].size.toString();
        lifetimeInput.value = _rocket[rocketName].lifetime.toString();
    }
// Hier wird die Rakete an den Server gesendet

//set Inter
    setInterval(update, refreshRate);

    // Hier werden alle explosions und ihre partikel neu gemalt
    function update(): void {
        crc2.fillStyle = "rgba(50, 50, 50, 0.05)";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        explosions.forEach((explosion, index) => { // index ist der Counter für die explosions// gib explosion for schleife // 
            // Entferne die Rakete, wenn die Lebenszeit vorbei ist
            if (explosion.lifetime == 0) {
                explosions.splice(index, 1); // splice löscht ein Element aus einem Array // 
                index--;
            } else {
                explosion.draw(); 
            }
        });
    }
}