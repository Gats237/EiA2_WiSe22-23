"use strict";
/*
Aufgabe: Aufgabe 3 Einkaufsliste
Name: Henning Pils
Matrikel: 269355
Datum: 27.10.2022
Quellen:
*/
var L03_Einkaufsliste;
(function (L03_Einkaufsliste) {
    //console.log("start");
    window.addEventListener("load", hndload);
    function hndload(_event) {
        document.querySelector("#Hinzufügen").addEventListener("click", neu);
        document.querySelector("#loeschen").addEventListener("click", löschItem);
        document.querySelector("#check1").addEventListener("click", check);
    }
    function neu() {
        console.log("Hinzufügen");
    }
    function löschItem() {
        console.log("Löschen");
    }
    function check() {
        console.log("Check");
    }
})(L03_Einkaufsliste || (L03_Einkaufsliste = {}));
;
//# sourceMappingURL=L03Einkaufsliste.js.map