"use strict";
var L09_Farm;
(function (L09_Farm) {
    class Animal {
        name;
        species;
        food;
        sound;
        lyrics;
        nHunger;
        constructor(_name, _species, _food, _sound, _nHunger) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
            this.lyrics = "... he had a " + this.species + " E-I-E-I-O with a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there. Here a " + this.sound + " there a " + this.sound + " everywhere a " + this.sound + " " + this.sound + " old MacDonald had a Farm E-I-E-I-O.";
            this.nHunger = _nHunger;
        }
        eat(_supplies) {
            let foodSupplies = _supplies.get(this.food);
            foodSupplies -= this.nHunger;
            _supplies.set(this.food, foodSupplies);
        }
    }
    L09_Farm.Animal = Animal;
})(L09_Farm || (L09_Farm = {}));
//# sourceMappingURL=A09_Food.js.map