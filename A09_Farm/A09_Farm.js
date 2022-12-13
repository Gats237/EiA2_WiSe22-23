"use strict";
/*
Aufgabe: Aufgabe 8 Canvas
Name: Henning Pils
Matrikel: 269355
Datum: 27.10.2022
Quellen: Robert Schindler
*/
var L09_Farm;
(function (L09_Farm) {
    let headline;
    let startButton;
    let generalLyrics;
    let animalCharacteristics;
    let animalLyrics;
    let foodSupplies;
    let groceryList;
    let restartButton;
    let cat;
    let dog;
    let horse;
    let cow;
    let chicken;
    let macDonaldsAnimals = [];
    let currentSupplies;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        headline = document.createElement("span");
        headline.classList.add("headline");
        headline.innerHTML = "Welcome to old MacDonalds Farm";
        startButton = document.createElement("button");
        startButton.classList.add("startButton");
        startButton.innerHTML = "Lets GO!";
        document.body.appendChild(headline);
        document.body.appendChild(startButton);
        startButton.addEventListener("click", farmSettings);
    }
    function farmSettings() {
        headline.remove();
        startButton.remove();
        generalLyrics = document.createElement("span");
        generalLyrics.classList.add("genLyricsBox");
        generalLyrics.innerHTML = "Old MacDonald had a Farm E-I-E-I-O and on the farm ...";
        animalCharacteristics = document.createElement("span");
        animalCharacteristics.classList.add("animalCharact");
        animalLyrics = document.createElement("span");
        animalLyrics.classList.add("animalLyrics");
        foodSupplies = document.createElement("span");
        foodSupplies.classList.add("supplies");
        let suppliesHeadline = document.createElement("h3");
        suppliesHeadline.innerHTML = "Food Supplies";
        document.body.appendChild(generalLyrics);
        document.body.appendChild(animalCharacteristics);
        document.body.appendChild(animalLyrics);
        document.body.appendChild(foodSupplies);
        foodSupplies.appendChild(suppliesHeadline);
        createAnimals();
        createFoodSupplies();
        farm();
    }
    function createAnimals() {
        cat = new L09_Farm.Animal("Charlie", "cat", "fish", "miauuuu", 1);
        dog = new L09_Farm.Animal("Wolfi", "dog", "meat", "wufff", 2);
        horse = new L09_Farm.Animal("Bella", "horse", "hay", "heyahh", 4);
        cow = new L09_Farm.Animal("Johann", "cow", "grass", "muhh", 5);
        chicken = new L09_Farm.Animal("Olaf", "chicken", "corn", "kikeriki", 3);
        //  macDonaldsAnimals = [cat, dog, horse, cow, chicken];
        macDonaldsAnimals.push(cat);
        macDonaldsAnimals.push(dog);
        macDonaldsAnimals.push(horse);
        macDonaldsAnimals.push(cow);
        macDonaldsAnimals.push(chicken);
    }
    function createFoodSupplies() {
        currentSupplies = new Map();
        currentSupplies.set("fish", 4);
        currentSupplies.set("meat", 8);
        currentSupplies.set("hay", 16);
        currentSupplies.set("grass", 20);
        currentSupplies.set("corn", 12);
    }
    function farm() {
        for (let index = 0; index < macDonaldsAnimals.length; index++) {
            let currentAnimal = macDonaldsAnimals[index];
            console.log(currentSupplies);
            console.log(currentAnimal.lyrics);
            if (index < 4) {
                currentAnimal.eat(currentSupplies);
                // setTimeout(function (): void {
                refreshAnimalCharacteristics(currentAnimal);
                refreshAnimalLyrics(currentAnimal);
                refreshSupplies();
                // }, 3000);
                console.log(index);
                console.log(currentAnimal.species, "eats", currentAnimal.nHunger, currentAnimal.food);
            }
            else {
                currentAnimal.eat(currentSupplies);
                //index = 0;
                endFarm();
                console.log(index);
                console.log(currentAnimal.species, "eats", currentAnimal.nHunger, currentAnimal.food);
                console.log(currentSupplies);
            }
            //console.log(index);
            //console.log(currentAnimal);
        }
    }
    function refreshSupplies() {
        let supplyString = "";
        supplyString += "Food supply: " + "<br>" +
            "fish: " + currentSupplies.get("fish") + "kg" + "<br>" +
            "meat: " + currentSupplies.get("meat") + "kg" + "<br>" +
            "hay: " + currentSupplies.get("hay") + "kg" + "<br>" +
            "grass: " + currentSupplies.get("grass") + "kg" + "<br>" +
            "corn: " + currentSupplies.get("corn") + "kg";
        foodSupplies.innerHTML = supplyString;
    }
    function refreshAnimalCharacteristics(currentAnimal) {
        let characteristics = "";
        characteristics += "My name is " + currentAnimal.name + "<br>" + "I'm a " + currentAnimal.species +
            "<br>" + "I like to eat " + currentAnimal.food + "<br>" + "I make " + currentAnimal.sound + "<br>";
        animalCharacteristics.innerHTML = characteristics;
    }
    function refreshAnimalLyrics(currentAnimal) {
        let lyricsOfAnimal = "";
        lyricsOfAnimal = currentAnimal.lyrics;
        animalLyrics.innerHTML = lyricsOfAnimal;
    }
    function endFarm() {
        generalLyrics.remove();
        animalCharacteristics.remove();
        animalLyrics.remove();
        groceryList = document.createElement("span");
        groceryList.classList.add("grocery");
        let groceries = "";
        groceries += "Old MacDonald needs more of the following goods:" + "<br>";
        currentSupplies.forEach((value, key) => {
            if (value <= 10) {
                groceries += key + "<br>";
            }
        });
        groceryList.innerHTML = groceries;
        restartButton = document.createElement("button");
        restartButton.classList.add("restart");
        restartButton.innerHTML = "new day";
        document.body.appendChild(groceryList);
        document.body.appendChild(restartButton);
        restartButton.addEventListener("click", restartFunction);
    }
    function restartFunction() {
        document.body.innerHTML = "";
        farm();
    }
})(L09_Farm || (L09_Farm = {}));
//# sourceMappingURL=A09_Farm.js.map