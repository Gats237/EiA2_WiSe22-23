"use strict";
/*
Aufgabe: Aufgabe 1 Zufallsgedicht
Name: Henning Pils
Matrikel: 269355
Datum: 13.10.2022
Quellen:
*/
var A02EventInsepctor;
(function (A02EventInsepctor) {
    // console.log("start") Verlinkung funktioniert
    window.addEventListener("load", hndload);
    function hndload(_event) {
        let divnull = document.querySelector("#div0");
        let diveins = document.querySelector("#div1");
        //document Events
        document.addEventListener("mousemove", setinfobox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        //body Events
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        //div Evevents
        divnull.addEventListener("click", logInfo);
        diveins.addEventListener("click", logInfo);
        divnull.addEventListener("keyup", logInfo);
        diveins.addEventListener("keyup", logInfo);
    }
})(A02EventInsepctor || (A02EventInsepctor = {}));
function setinfobox(_event) {
    let span = document.querySelector("span");
    // `$ Gibt das Atribut aus
    console.log(span);
    let posX = `${_event.clientX}`;
    let posY = `${_event.clientY}`;
    span.innerHTML = `X: ${posX}, Y:${posY}, Target:${_event.target}`;
    //Offset Span
    let OffsetX = _event.clientX + 15;
    let OffsetY = _event.clientY + 15;
    span.style.left = `${OffsetX}px`;
    span.style.top = `${OffsetY}px`;
}
;
function logInfo(_event) {
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);
}
;
//# sourceMappingURL=Untitled-2.js.map