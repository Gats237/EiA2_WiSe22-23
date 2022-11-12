/*
Aufgabe: Aufgabe 3 Einkaufsliste
Name: Henning Pils
Matrikel: 269355
Datum: 27.10.2022
Quellen: Robert Schindler, Yannik König!!, Jonas Atzenhofer, Tristan Broghammer
*/

namespace A05_Einkaufsliste_Client{ 
 
 //console.log("start");

export interface ItemAdded {
        Eintragen:string;
        Menge: number;
        Notiz: string;
        checkbox1: boolean;
        date: string;
    };

export interface Data { 
    [itemNumber: number]: ItemAdded[];
}

export let data: Data = {
    1:[
        {Eintragen: "Brot", Menge:1, Notiz: "Bauerbrot", checkbox1: false, date: "27.10.22"}
    ],
};
}
