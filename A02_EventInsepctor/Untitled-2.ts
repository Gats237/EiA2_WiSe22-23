/*
Aufgabe: Aufgabe 1 Zufallsgedicht
Name: Henning Pils
Matrikel: 269355
Datum: 13.10.2022
Quellen: 
*/

namespace A02EventInsepctor {

    // console.log("start") Verlinkung funktioniert

    window.addEventListener("load", hndload);

    function hndload(_event: Event): void {
        let divnull: HTMLElement = <HTMLElement>document.querySelector("#div0");
        let diveins: HTMLElement = <HTMLElement>document.querySelector("#div1");

        //document Events
        document.addEventListener("mousemove", setinfobox)
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
}

function setinfobox(_event: MouseEvent): void {
    let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span")
    // `$ Gibt das Atribut aus
    console.log(span);
    let posX: string = `${_event.clientX}`;
    let posY: string = `${_event.clientY}`;
    span.innerHTML = `X: ${posX}, Y:${posY}, Target:${_event.target}`;

    //Offset Span
    let OffsetX: number = _event.clientX + 15;
    let OffsetY: number = _event.clientY + 15;
    span.style.left = `${OffsetX}px`;
    span.style.top = `${OffsetY}px`;

    };

function logInfo(_event: Event) {
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);
}

;
