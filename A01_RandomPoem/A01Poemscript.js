"use strict";
/*
Aufgabe: Aufgabe 1 Zufallsgedicht
Name: Henning Pils
Matrikel: 269355
Datum: 13.10.2022
Quellen: Robert Schindler
*/
var A01RandomPoem;
(function (A01RandomPoem) {
    //Arrays
    let Subject = ["Robert", "Henning", "Scholz", "Hans", "Lindner", "Karin"];
    let Praedikat = ["verbrügelt", "beklaut", "liebt", "isst", "absorbiert", "hasst"];
    let Objekte = ["Kräne", "Autos", "Hamburger", "Karl Marx", "Kommunismus", "Deutschland"];
    //Schleife
    for (let index = 7; index >= 1; index--) {
        console.log(getVerse("Subject", "Praedikat", "Objekte"));
    }
    //Funktion get Verse
    function getVerse(_Subject, _Praedikat, _Objekte) {
        let Verse = "";
        let SubjectNumber = Math.floor(Math.random() * _Subject.length);
        let PraedikatNumber = Math.floor(Math.random() * _Praedikat.length);
        let ObjekteNumber = Math.floor(Math.random() * _Objekte.length);
        Verse = _Subject[SubjectNumber] + " " + _Praedikat[PraedikatNumber] + " " + _Objekte[ObjekteNumber];
        _Subject.slice(SubjectNumber, 1);
        _Praedikat.slice(PraedikatNumber, 1);
        _Objekte.slice(ObjekteNumber, 1);
        return Verse;
    }
})(A01RandomPoem || (A01RandomPoem = {}));
;
//# sourceMappingURL=A01Poemscript.js.map