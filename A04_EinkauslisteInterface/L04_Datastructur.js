"use strict";
/*
Aufgabe: Aufgabe 3 Einkaufsliste
Name: Henning Pils
Matrikel: 269355
Datum: 27.10.2022
Quellen:
*/
var L04_Datastructur;
(function (L04_Datastructur) {
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
        console.log(L04_Datastructur.data);
    }
})(L04_Datastructur || (L04_Datastructur = {}));
;
//# sourceMappingURL=L04_Datastructur.js.map