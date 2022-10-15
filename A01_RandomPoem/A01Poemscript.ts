/*
Aufgabe: Aufgabe 1 Zufallsgedicht
Name: Henning Pils
Matrikel: 236955
Datum: 13.10.2022
Quellen: Robert Schindler
*/

namespace A01RandomPoem{

    //Arrays
let Subject: string[]= [ "Robert", "Henning", "Scholz", "Hans", "Lindner", "Karin"];
let Praedikat: string[]= ["verbrügelt", "beklaut", "liebt", "isst", "absorbiert", "hasst"];
let Objekte: string[]= ["Kräne", "Autos", "Hamburger", "Karl Marx", "Kommunismus", "Deutschland"];

//Schleife
for (let index = 7; index >=1; index--) {
   console.log(getVerse( Subject , Praedikat, Objekte))
}

//Funktion get Verse
function getVerse(_Subject:string ,_Praedikat:string,_Objekte:string):string{

let Verse: string= "";
let SubjectNumber: number= Math.floor(Math.random() * _Subject.length);
let PraedikatNumber: number= Math.floor(Math.random()*_Praedikat.length);
let ObjekteNumber: number= Math.floor(Math.random()*_Objekte.length);
 
Verse= _Subject[SubjectNumber] + " " + _Praedikat[PraedikatNumber] + " " + _Objekte[ObjekteNumber];
_Subject.slice(SubjectNumber, 1);
_Praedikat.slice(PraedikatNumber, 1);
_Objekte.slice(ObjekteNumber, 1);
return Verse;
}
};