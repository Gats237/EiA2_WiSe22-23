"use strict";
var Auswahl;
(function (Auswahl) {
    console.log("Verklinkung funktioniert");
    window.addEventListener("load", handleLoad);
    let Questions = [];
    let Question;
    let ButtonActive = true;
    let buttonA;
    let buttonB;
    let buttonC;
    let buttonD;
    //Counter Richtige Fragen/ Falsche Fragen/ Punkte   / Fragen
    let pointcounter = 0;
    let wrongquestioncounter = 0;
    let questioncounter = 0;
    //Template für Fragen
    //{question: "", answers: ["", "","",""], correctAnswer: "", link: ""},
    //Fragen für Themen Arrays
    //HTML Fragen
    let HMTLQuestion = [
        { question: "Ist HTML eine Programmiersprache?", answers: ["Ja", "Nein", "vielleicht", "Nur Montags"], correctAnswer: "Nein", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
        { question: "Für was steht das ML in HTML", answers: ["Markup Language", "Mayonese Love", "Multiply Language", "Mega Language"], correctAnswer: "Markup Language", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
        { question: "Welche Tags müssen nicht geschlossen werden?", answers: ["void", "p", "h", "div"], correctAnswer: "void", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
        { question: "Welches Metachart wird üblich verwendet", answers: ["USA-5", "UTF-8", "WWW", "UTF-3"], correctAnswer: "UTF-8", link: "https://felix.hs-furtwangen.de/auth/RepositoryEntry/4102291767/CourseNode/103340169884837" },
        { question: "Aus was bestehen die meisten HTML Tags", answers: ["Einen öffenden Tag und einen schließenden Tag", "Einen Selektor", "Einen Link", "Haben keine Gemeinsamkeiten"], correctAnswer: "Einen öffenden Tag und einen schließenden Tag", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
        { question: "Wie wirde das Wort Semantik noch genannt", answers: ["Praxis", "Zeichen", "Theorie", "Bedeutungslehre"], correctAnswer: "Bedeutungslehre", link: "https://felix.hs-furtwangen.de/m/e4d06cfb1be786728869f70d91dfa7e2/L03_HTML5_Familie.pdf" },
        { question: "Was ist bei einer HTML Element an ertser Stelle", answers: ["footer", "header", "main", "head"], correctAnswer: "head", link: "https://felix.hs-furtwangen.de/m/e4d06cfb1be786728869f70d91dfa7e2/L03_HTML5_Familie.pdf" },
        { question: "Welche Aufgabe hat der Header in der Regel?", answers: ["Informationen: z.B. Hauptnavigation, Brand (typischerweise Logo), Metanavigationen (Sprachswitch, ...) ", "Primär / Sekundärnavigation", "Typische Seiteninformationen / Marginalspalten mit ergänzenden Zusatzinformationen zum eigentlichen Inhalt", "Kontakt, Impressum (seit DSGVO). Auch: Fußnoten im wissenscha!lichen Sinne"], correctAnswer: "Informationen: z.B. Hauptnavigation, Brand (typischerweise Logo), Metanavigationen (Sprachswitch, ...) ", link: "https://felix.hs-furtwangen.de/m/e4d06cfb1be786728869f70d91dfa7e2/L03_HTML5_Familie.pdf" },
        { question: "Was heißt DOM", answers: ["Document Object Model", " Document Oriented Markup ", "Document Over Mainsystem", "Document Object Markup "], correctAnswer: "Document Object Model", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
        { question: "Was ist kein Block Elememt", answers: ["h1", "p", "div", "img"], correctAnswer: "img", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
    ];
    //CSS Fragen
    let CSSQuestion = [
        { question: "Ist CSS eine Programmiersprache?", answers: ["Ja", "Nein", "vielleicht", "Nur Dienstags"], correctAnswer: "Nein", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-1_CSS_I_Einfuehrung.pdf" },
        { question: "Welche Aufgabe hat CSS", answers: ["Manipulation der Darstellung von Elementen in Web- Anwendungen", "Gibt die Struktur des Webseite vor", "Führt Funktionen zur DOM Manipulation aus", "Untersucht Dateien auf Schadsoftware "], correctAnswer: "Manipulation der Darstellung von Elementen in Web- Anwendungen", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-1_CSS_I_Einfuehrung.pdf" },
        { question: "Welche Methode für die Darstellung mit CSS von Web-Anwendungen  wirdempfohlen?", answers: ["inline", "im Head", "als externes Dokument", "outline"], correctAnswer: "als externes Dokument", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-1_CSS_I_Einfuehrung.pdf" },
        { question: "Mit welchem Zeichen wird eine ID mit CSS selektiert?", answers: [".", "#", "()", "/"], correctAnswer: "#", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-2_CSS_I-Selektoren_v2.pdf" },
        { question: "Mit welchem Zeichen wird eine class mit CSS selektiert?", answers: [".", "#", "()", "/"], correctAnswer: ".", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-2_CSS_I-Selektoren_v2.pdf" },
        { question: "Welches Symbol ist der Syntaktische Zuordungsoperator für den Datentyp?", answers: [";", ".", ":", "="], correctAnswer: ":", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-2_CSS_I-Selektoren_v2.pdf" },
    ];
    //TS Fragen
    let TSQuestion = [
        { question: "Ist TypeScript eine Programmiersprache?", answers: ["Ja", "Nein", "vielleicht", "Nur Dienstags"], correctAnswer: "Ja", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-01_Einstieg_TypeScript.pdf" },
        { question: "Durch was schließt TypeScript die Lücken von JavaScript?", answers: ["Strikte Typisierung", "Es einfacher zu verstehen", "Funktionen werden besser ausgeführt", "Es hat Vorteile im Webbroswer Grafiken darzustellen"], correctAnswer: "Strikte Typisierung", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-03_Einstieg_TypeScript.pdf" },
        { question: "Wie heißt der Schritt TypeScript zu JavaScript umzuwandel", answers: ["validieren", "kompilieren", "randalieren", "interagieren"], correctAnswer: "Kompilieren", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-03_Einstieg_TypeScript.pdf" },
        { question: "Welche Bezeichnug für eine Variable ist syntaktisch nicht richtig?", answers: ["1variable", "Variable1", "vArIAblE1", "V1"], correctAnswer: "1variable", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-04_Einstieg_TypeScript.pdf" },
        { question: "Was darf man bei Bezeichnung für Variablen nicht nutzen?", answers: ["Schlüsselwörter", "Verwendete IDs aus der HTML Datei", "Ein Wort mit einer Zahl am Ende ", "Nur ein Buchstabe"], correctAnswer: "vSchlüsselwörter", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-04_Einstieg_TypeScript.pdf" },
        { question: "Wie wird  bei let Bezeichnung : Typ =x, x genannt?  ", answers: ["Gültiger Wert", "Zahl", "Typenzuweisung", " Deklaration"], correctAnswer: "Gültiger Wert", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-05_Einstieg_TypeScript.pdf" },
        { question: "Welcher Datentyp ist kein primitiver", answers: ["array", "number", "boolean", "any"], correctAnswer: "array", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-06_Einstieg_TypeScript.pdf" },
        { question: "Mit welchem mathematischen Operator kann der Index einer Schleife erhöht werden?", answers: ["Incrementor", "Decrementor", "Dementor", "Divisions"], correctAnswer: "Incrementor", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-07_Einstieg_TypeScript.pdf" },
        { question: "Mit welchem mathematischen Operator kann der Index einer Schleife verringert werden?", answers: ["Incrementor", "Decrementor", "Dementor", "Divisions"], correctAnswer: "Decrementor", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-07_Einstieg_TypeScript.pdf" },
        { question: "Was können Operatoren nicht", answers: ["Daten verabeiten", "Daten verketten", "Daten berechnen", "Daten löschen"], correctAnswer: "Daten löschen", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-08_Einstieg_TypeScript.pdf" },
        { question: "Wie wird der Vorgang genannt bei dem das Script Zeile für Zeile gelesen wird und interpretiert?", answers: ["parsen", "read", "inspect", "analyze"], correctAnswer: "parsen", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-08_Einstieg_TypeScript.pdf" },
        { question: "Wie kann man verhindern, dass alle Skriptanweisungen automatisch abgearbeitet werden", answers: ["Funktionen", "Auf Escape drücken", "Einen console.log ins Script einbauen", "Eine Variable mit let:stop deklarieren"], correctAnswer: "https://felix.hs-furtwangen.de/m/53faf22ce5d2821f77321cc06b9d4755/L07-01_Funktionen.pdf", link: "Funktionen" },
        { question: "Wie nennt man diese Klammern einer Funktion {}", answers: ["Anweisungsklammern", "Funktionsklammern", "Objektklammern", "Zuweisungsklammern"], correctAnswer: "Anweisungsklammernx", link: "https://felix.hs-furtwangen.de/m/53faf22ce5d2821f77321cc06b9d4755/L07-01_Funktionen.pdf" },
        { question: "Was kann bei einer Funktion optional sich in diesen Klammern () befinden? ", answers: ["Argumente", "Variablen", "Die Bezeichnung der Funktion", "CSS Objekte die dadurch interagieren"], correctAnswer: "Argumente", link: "https://felix.hs-furtwangen.de/m/53faf22ce5d2821f77321cc06b9d4755/L07-01_Funktionen.pdf" },
        { question: "Wie werden Variablen außerhalb einer Funktion genannt", answers: ["lokal", "global", "total", "monoklonal"], correctAnswer: "global", link: "https://felix.hs-furtwangen.de/m/53faf22ce5d2821f77321cc06b9d4755/L07-01_Funktionen.pdf" },
        { question: "Wie wird der Bereich einer Funktion zwischen {} geschweiften Klammern genannt?", answers: ["Funktionsbereich", "Wirkungsbereich", "Variablenbereich", "Aufgabenberreich"], correctAnswer: "Funktionsbereich", link: "https://felix.hs-furtwangen.de/m/53faf22ce5d2821f77321cc06b9d4755/L07-01_Funktionen.pdf" },
    ];
    //Gemischte Fragen
    let Gemischt = [
        { question: "Ist HTML eine Programmiersprache?", answers: ["Ja", "Nein", "vielleicht", "Nur Montags"], correctAnswer: "Nein", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
        { question: "Für was steht das ML in HTML", answers: ["Markup Language", "Mayonese Love", "Multiply Language", "Mega Language"], correctAnswer: "Markup Language", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
        { question: "Welche Tags müssen nicht geschlossen werden?", answers: ["void", "p", "h", "div"], correctAnswer: "void", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
        { question: "Welches Metachart wird üblich verwendet", answers: ["USA-5", "UTF-8", "WWW", "UTF-3"], correctAnswer: "UTF-8", link: "https://felix.hs-furtwangen.de/auth/RepositoryEntry/4102291767/CourseNode/103340169884837" },
        { question: "Aus was bestehen die meisten HTML Tags", answers: ["Einen öffenden Tag und einen schließenden Tag", "Einen Selektor", "Einen Link", "Haben keine Gemeinsamkeiten"], correctAnswer: "Einen öffenden Tag und einen schließenden Tag", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
        { question: "Wie wirde das Wort Semantik noch genannt", answers: ["Praxis", "Zeichen", "Theorie", "Bedeutungslehre"], correctAnswer: "Bedeutungslehre", link: "https://felix.hs-furtwangen.de/m/e4d06cfb1be786728869f70d91dfa7e2/L03_HTML5_Familie.pdf" },
        { question: "Was ist bei einer HTML Element an ertser Stelle", answers: ["footer", "header", "main", "head"], correctAnswer: "head", link: "https://felix.hs-furtwangen.de/m/e4d06cfb1be786728869f70d91dfa7e2/L03_HTML5_Familie.pdf" },
        { question: "Welche Aufgabe hat der Header in der Regel?", answers: ["Informationen: z.B. Hauptnavigation, Brand (typischerweise Logo), Metanavigationen (Sprachswitch, ...) ", "Primär / Sekundärnavigation", "Typische Seiteninformationen / Marginalspalten mit ergänzenden Zusatzinformationen zum eigentlichen Inhalt", "Kontakt, Impressum (seit DSGVO). Auch: Fußnoten im wissenscha!lichen Sinne"], correctAnswer: "Informationen: z.B. Hauptnavigation, Brand (typischerweise Logo), Metanavigationen (Sprachswitch, ...) ", link: "https://felix.hs-furtwangen.de/m/e4d06cfb1be786728869f70d91dfa7e2/L03_HTML5_Familie.pdf" },
        { question: "Was heißt DOM", answers: ["Document Object Model", " Document Oriented Markup ", "Document Over Mainsystem", "Document Object Markup "], correctAnswer: "Document Object Model", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
        { question: "Was ist kein Block Elememt", answers: ["h1", "p", "div", "img"], correctAnswer: "img", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
        { question: "Ist CSS eine Programmiersprache?", answers: ["Ja", "Nein", "vielleicht", "Nur Dienstags"], correctAnswer: "Nein", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-1_CSS_I_Einfuehrung.pdf" },
        { question: "Welche Aufgabe hat CSS", answers: ["Manipulation der Darstellung von Elementen in Web- Anwendungen", "Gibt die Struktur des Webseite vor", "Führt Funktionen zur DOM Manipulation aus", "Untersucht Dateien auf Schadsoftware "], correctAnswer: "Manipulation der Darstellung von Elementen in Web- Anwendungen", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-1_CSS_I_Einfuehrung.pdf" },
        { question: "Welche Methode für die Darstellung mit CSS von Web-Anwendungen  wirdempfohlen?", answers: ["inline", "im Head", "als externes Dokument", "outline"], correctAnswer: "als externes Dokument", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-1_CSS_I_Einfuehrung.pdf" },
        { question: "Mit welchem Zeichen wird eine ID mit CSS selektiert?", answers: [".", "#", "()", "/"], correctAnswer: "#", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-2_CSS_I-Selektoren_v2.pdf" },
        { question: "Mit welchem Zeichen wird eine class mit CSS selektiert?", answers: [".", "#", "()", "/"], correctAnswer: ".", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-2_CSS_I-Selektoren_v2.pdf" },
        { question: "Welches Symbol ist der Syntaktische Zuordungsoperator für den Datentyp?", answers: [";", ".", ":", "="], correctAnswer: ":", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-2_CSS_I-Selektoren_v2.pdf" },
        { question: "Ist TypeScript eine Programmiersprache?", answers: ["Ja", "Nein", "vielleicht", "Nur Dienstags"], correctAnswer: "Ja", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-01_Einstieg_TypeScript.pdf" },
        { question: "Durch was schließt TypeScript die Lücken von JavaScript?", answers: ["Strikte Typisierung", "Es einfacher zu verstehen", "Funktionen werden besser ausgeführt", "Es hat Vorteile im Webbroswer Grafiken darzustellen"], correctAnswer: "Strikte Typisierung", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-03_Einstieg_TypeScript.pdf" },
        { question: "Wie heißt der Schritt TypeScript zu JavaScript umzuwandel", answers: ["Validieren", "Kompilieren", "Randalieren", "Randalieren"], correctAnswer: "Kompilieren", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-03_Einstieg_TypeScript.pdf" },
        { question: "Welche Bezeichnug für eine Variable ist syntaktisch nicht richtig?", answers: ["1variable", "Variable1", "vArIAblE1", "V1"], correctAnswer: "1variable", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-04_Einstieg_TypeScript.pdf" },
        { question: "Was darf man bei Bezeichnung für Variablen nicht nutzen?", answers: ["Schlüsselwörter", "Verwendete IDs aus der HTML Datei", "Ein Wort mit einer Zahl am Ende ", "Nur ein Buchstabe"], correctAnswer: "vSchlüsselwörter", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-04_Einstieg_TypeScript.pdf" },
        { question: "Wie wird  bei let Bezeichnung : Typ =x, x genannt?  ", answers: ["Gültiger Wert", "Zahl", "Typenzuweisung", " Deklaration"], correctAnswer: "Gültiger Wert", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-05_Einstieg_TypeScript.pdf" },
        { question: "Welcher Datentyp ist kein primitiver", answers: ["array", "number", "boolean", "any"], correctAnswer: "array", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-06_Einstieg_TypeScript.pdf" },
        { question: "Mit welchem mathematischen Operator kann der Index einer Schleife erhöht werden?", answers: ["Incrementor", "Decrementor", "Dementor", "Divisions"], correctAnswer: "Incrementor", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-07_Einstieg_TypeScript.pdf" },
        { question: "Mit welchem mathematischen Operator kann der Index einer Schleife verringert werden?", answers: ["Incrementor", "Decrementor", "Dementor", "Divisions"], correctAnswer: "Decrementor", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-07_Einstieg_TypeScript.pdf" },
        { question: "Was können Operatoren nicht", answers: ["Daten verabeiten", "Daten verketten", "Daten berechnen", "Daten löschen"], correctAnswer: "Daten löschen", link: "https://felix.hs-furtwangen.de/m/346b537351ce17776f05e15685a23ea0/L06-08_Einstieg_TypeScript.pdf" },
        { question: "Wie wird der Vorgang genannt bei dem das Script Zeile für Zeile gelesen wird und interpretiert?", answers: ["parsen", "read", "inspect", "analyze"], correctAnswer: "parsen", link: "" },
        { question: "Wie kann man verhindern, dass alle Skriptanweisungen automatisch abgearbeitet werden", answers: ["Funktionen", "Auf Escape drücken", "Einen console.log ins Script einbauen", "Eine Variable mit let:stop deklarieren"], correctAnswer: "https://felix.hs-furtwangen.de/m/53faf22ce5d2821f77321cc06b9d4755/L07-01_Funktionen.pdf", link: "Funktionen" },
        { question: "Wie nennt man die diese Klammern einer Funktion {}", answers: ["Anweisungsklammer", "Funktionsklammern", "Objektklammer", "Zuweisungsklammer"], correctAnswer: "Anweisungsklamme", link: "https://felix.hs-furtwangen.de/m/53faf22ce5d2821f77321cc06b9d4755/L07-01_Funktionen.pdf" },
        { question: "Was kann bei einer Funktion optional sich in diesen Klammern () befinden? ", answers: ["Argumente", "Variablen", "Die Bezeichnung der Funktion", "CSS Objekte die dadurch interagieren"], correctAnswer: "Argumente", link: "https://felix.hs-furtwangen.de/m/53faf22ce5d2821f77321cc06b9d4755/L07-01_Funktionen.pdf" },
        { question: "Wie werden Variablen außerhalb einer Funktion genannt", answers: ["lokal", "global", "total", "monoklonal"], correctAnswer: "global", link: "https://felix.hs-furtwangen.de/m/53faf22ce5d2821f77321cc06b9d4755/L07-01_Funktionen.pdf" },
        { question: "Wie wird der Bereich einer Funktion zwischen {} geschweiften Klammern genannt?", answers: ["Funktionsbereich", "Wirkungsbereich", "Variablenbereich", "Aufgabenberreich"], correctAnswer: "Funktionsbereich", link: "https://felix.hs-furtwangen.de/m/53faf22ce5d2821f77321cc06b9d4755/L07-01_Funktionen.pdf" },
    ];
    // handleload der Seite //Buttons Auswahl Themen zuweisen 
    function handleLoad() {
        console.log("Themen");
        let T1 = document.getElementById("T1");
        let T2 = document.getElementById("T2");
        let T3 = document.getElementById("T3");
        let T4 = document.getElementById("T4");
        //Eventlistener für klick für Themenbutton 
        T1.addEventListener("click", function () { navigateToGame(HMTLQuestion); });
        T2.addEventListener("click", function () { navigateToGame(CSSQuestion); });
        T3.addEventListener("click", function () { navigateToGame(TSQuestion); });
        T4.addEventListener("click", function () { navigateToGame(Gemischt); });
    }
    // Weiterleitung zum Spiel
    function navigateToGame(_Thema) {
        // Fragen werden in Array geladen
        for (let i = 0; i < _Thema.length; i++) {
            Questions.push(_Thema[i]);
        }
        // Array wird gemischt Positionen werden vertauscht
        for (let i = 0; i < 100; i++) {
            let loc1 = Math.floor(Math.random() * Questions.length);
            let loc2 = Math.floor(Math.random() * Questions.length);
            let tmp = Questions[loc1];
            Questions[loc1] = Questions[loc2];
            Questions[loc2] = tmp;
        }
        //Question wird angezeigt
        let hidden = document.getElementById("question-container");
        hidden.style.display = "block";
        //Themenbereich wird ausgeblendet
        let hidden2 = document.getElementById("Themengebiet");
        hidden2.style.display = "none";
        //Eventlistener für die Buttons der Antworten
        buttonA = document.getElementById("A");
        buttonB = document.getElementById("B");
        buttonC = document.getElementById("C");
        buttonD = document.getElementById("D");
        //Eventlistener für die Buttons der Antworten 
        buttonA.addEventListener("click", function () { if (ButtonActive == true) {
            checkAnswer(Question.answers[0], Question.correctAnswer), Question.link;
        } });
        buttonB.addEventListener("click", function () { if (ButtonActive == true) {
            checkAnswer(Question.answers[1], Question.correctAnswer), Question.link;
        } });
        buttonC.addEventListener("click", function () { if (ButtonActive == true) {
            checkAnswer(Question.answers[2], Question.correctAnswer), Question.link;
        } });
        buttonD.addEventListener("click", function () { if (ButtonActive == true) {
            checkAnswer(Question.answers[3], Question.correctAnswer), Question.link;
        } });
        //Eventlistener für den Weiter Button
        let nextQ = document.getElementById("nextQ");
        nextQ.addEventListener("click", function () {
            if (pointcounter == 5) {
                endGame();
            }
            else {
                console.log("nextQ");
                update();
                let right2 = document.getElementById("WeiterButton");
                right2.style.display = "none";
            }
        });
        update();
    }
    //Update Funktion
    function update() {
        //Weiter Button wird ausgeblendet
        let wrong2 = document.getElementById("WeiterButton");
        wrong2.style.display = "none";
        //Reset Buttonactive
        ButtonActive = true;
        //Punktestand Konsolen überprüfung
        console.log("Falsche Antowrten", wrongquestioncounter);
        console.log("Anzahl der Fragen", questioncounter);
        console.log("Richtige Fragen", pointcounter);
        console.log("update");
        console.log(Questions);
        //Frage wird aus dem Array geladen und gelöscht
        Question = Questions[0];
        Questions.splice(0, 1);
        //Antworten werden gemischt
        for (let i = 0; i < 100; i++) {
            //gibt eine zufällige Zahl zwischen 0 und 3 aus aus dem Array
            let loc1 = Math.floor(Math.random() * Question.answers.length);
            let loc2 = Math.floor(Math.random() * Question.answers.length);
            //Antworten wird neu zugewiesen/ dient als Platzhalter
            let tmp = Question.answers[loc1];
            //Antworten werden vertauscht
            Question.answers[loc1] = Question.answers[loc2];
            Question.answers[loc2] = tmp;
        }
        //DOM Manipulation mit den Informationen aus Question
        let question = document.getElementById("question");
        question.innerHTML = Question.question;
        buttonA.innerHTML = Question.answers[0];
        buttonB.innerHTML = Question.answers[1];
        buttonC.innerHTML = Question.answers[2];
        buttonD.innerHTML = Question.answers[3];
        //Link wird ausgeblendet
        let link = document.getElementById("Erklärung");
        link.style.display = "none";
    }
    //Funktion für die Antworten
    function checkAnswer(answer, correctAnswer) {
        let Check = document.getElementById("Check");
        let link = document.getElementById("Erklärung");
        link.setAttribute("href", Question.link);
        link.style.display = "block";
        let Farbenwechsel = document.getElementById("Check");
        let WeiterButton = document.getElementById("WeiterButton");
        WeiterButton.style.display = "";
        questioncounter++;
        ButtonActive = false;
        //Überprüfung der Antworten und Punktevergabe
        if (answer == correctAnswer) {
            console.log("Richtig");
            pointcounter++;
            Check.innerHTML = "Richtig";
            Farbenwechsel.style.background = "green";
            setTimeout(endGame, 100);
        }
        //Falsche Antworten werden in ein Array geladen
        else {
            console.log("Falsch");
            wrongquestioncounter++;
            Check.innerHTML = "Falsch";
            Farbenwechsel.style.background = "red";
            Questions.push(Question);
            setTimeout(endGame, 100);
        }
    }
    //Spiel wird beendet wenn 5 Fragen richtig beantwortet wurden
    function endGame() {
        if (pointcounter >= 5) {
            // HTML Elemente werden als Counter angezeigt mit den jeweiligen erreichten Punkten
            let actualpoint = document.getElementById("pointvalue");
            actualpoint.innerHTML = pointcounter.toString() + "" + "Richtige Antworten";
            actualpoint.style.display = "block";
            let actualquestion = document.getElementById("questioncounter");
            actualquestion.innerHTML = questioncounter.toString() + "" + "Versuche";
            actualquestion.style.display = "block";
            let actualwrong = document.getElementById("wrongcounter-value");
            actualwrong.innerHTML = wrongquestioncounter.toString() + "" + "Falsche Antworten";
            actualwrong.style.display = "block";
            //Nochmal Button wird angezeigt
            let nochmal = document.getElementById("nochmal");
            nochmal.style.display = "block";
            //HTML Elemente werden ausgeblendet
            let question = document.getElementById("question");
            question.style.display = "none";
            buttonA.style.display = "none";
            buttonB.style.display = "none";
            buttonC.style.display = "none";
            buttonD.style.display = "none";
            let answerwithlink = document.getElementById("answerwithlink");
            answerwithlink.style.display = "none";
            let Check = document.getElementById("Check");
            Check.style.display = "none";
            let WeiterButton = document.getElementById("WeiterButton");
            WeiterButton.style.display = "none";
            let link = document.getElementById("Erklärung");
            link.style.display = "none";
        }
        else {
            let actualpoint = document.getElementById("pointvalue");
            actualpoint.innerHTML = pointcounter.toString() + "" + "Richtige Antworten";
            actualpoint.style.display = "block";
            let actualquestion = document.getElementById("questioncounter");
            actualquestion.innerHTML = questioncounter.toString() + "" + "Versuche";
            actualquestion.style.display = "block";
            let actualwrong = document.getElementById("wrongcounter-value");
            actualwrong.innerHTML = wrongquestioncounter.toString() + "" + "Falsche Antworten";
            actualwrong.style.display = "block";
        }
    }
})(Auswahl || (Auswahl = {}));
//# sourceMappingURL=sript.js.map