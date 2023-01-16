"use strict";
var Auswahl;
(function (Auswahl) {
    console.log("Verklinkung funktioniert");
    window.addEventListener("load", handleLoad);
    let Questions = [];
    let Question;
    let Buttonactive = true;
    //Counter Richtige Fragen/ Falsche Fragen/ Punkte   / Fragen
    let pointcounter = 0;
    let wrongquestioncounter = 0;
    let questioncounter = 0;
    //Template für Fragen
    //{question: "", answers: ["", "","",""], correctAnswer: ""}
    //Fragen für Themen Arrays
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
    let CSSQuestion = [
        { question: "Ist CSS eine Programmiersprache?", answers: ["Ja", "Nein", "vielleicht", "Nur Dienstags"], correctAnswer: "Nein", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-1_CSS_I_Einfuehrung.pdf" },
        { question: "Welche Aufgabe hat CSS", answers: ["Manipulation der Darstellung von Elementen in Web- Anwendungen", "Gibt die Struktur des Webseite vor", "Führt Funktionen zur DOM Manipulation aus", "Untersucht Dateien auf Schadsoftware "], correctAnswer: "Manipulation der Darstellung von Elementen in Web- Anwendungen", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-1_CSS_I_Einfuehrung.pdf" },
        { question: "Welche Methode für die Darstellung mit CSS von Web-Anwendungen  wirdempfohlen?", answers: ["inline", "im Head", "als externes Dokument", "outline"], correctAnswer: "als externes Dokument", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-1_CSS_I_Einfuehrung.pdf" },
        { question: "Mit welchem Zeichen wird eine ID mit CSS selektiert?", answers: [".", "#", "()", "/"], correctAnswer: "#", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-2_CSS_I-Selektoren_v2.pdf" },
        { question: "Mit welchem Zeichen wird eine class mit CSS selektiert?", answers: [".", "#", "()", "/"], correctAnswer: ".", link: "https://felix.hs-furtwangen.de/m/a08c56bdd4ce8b0a1733dbfa6d82bf3c/L04-2_CSS_I-Selektoren_v2.pdf" },
    ];
    let TSQuestion = [];
    let Gemischt = [];
    // //Buttons Auswahl Themen zuweisen 
    function handleLoad() {
        console.log("Themen");
        let T1 = document.getElementById("T1");
        let T2 = document.getElementById("T2");
        let T3 = document.getElementById("T3");
        let T4 = document.getElementById("T4");
        T1.addEventListener("click", function () { navigateToGame(HMTLQuestion); });
        T2.addEventListener("click", function () { navigateToGame(CSSQuestion); });
        T3.addEventListener("click", function () { navigateToGame(TSQuestion); });
        T4.addEventListener("click", function () { navigateToGame(Gemischt); });
    }
    //Eventlistener für klick
    // Weiterleitung zum Spiel
    function navigateToGame(_Thema) {
        for (let i = 0; i < _Thema.length; i++) {
            Questions.push(_Thema[i]);
        }
        for (let i = 0; i < 100; i++) {
            let loc1 = Math.floor(Math.random() * Questions.length);
            let loc2 = Math.floor(Math.random() * Questions.length);
            let tmp = Questions[loc1];
            Questions[loc1] = Questions[loc2];
            Questions[loc2] = tmp;
        }
        let hidden = document.getElementById("question-container");
        hidden.style.display = "block";
        let hidden2 = document.getElementById("Themengebiet");
        hidden2.style.display = "none";
        //Eventlistener für die Buttons
        let buttonA = document.getElementById("A");
        let buttonB = document.getElementById("B");
        let buttonC = document.getElementById("C");
        let buttonD = document.getElementById("D");
        buttonA.addEventListener("click", function () { if (Buttonactive == true) {
            checkAnswer(Question.answers[0], Question.correctAnswer), Question.link;
        } });
        buttonB.addEventListener("click", function () { if (Buttonactive == true) {
            checkAnswer(Question.answers[1], Question.correctAnswer), Question.link;
        } });
        buttonC.addEventListener("click", function () { if (Buttonactive == true) {
            checkAnswer(Question.answers[2], Question.correctAnswer), Question.link;
        } });
        buttonD.addEventListener("click", function () { if (Buttonactive == true) {
            checkAnswer(Question.answers[3], Question.correctAnswer), Question.link;
        } });
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
    function update() {
        //Clear Inner HTML für alle Buttons und die Frage
        let wrong2 = document.getElementById("WeiterButton");
        wrong2.style.display = "none";
        // Pointcounter /Style Block
        //Reset Buttonactive
        Buttonactive = true;
        //Punktestand Konsolen überprüfung
        console.log("Falsche Antowrten", wrongquestioncounter);
        console.log("Anzahl der Fragen", questioncounter);
        console.log("Richtige Fragen", pointcounter);
        console.log("update");
        console.log(Questions);
        Question = Questions[0];
        Questions.splice(0, 1);
        for (let i = 0; i < 1000; i++) {
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
        let dispplayA = document.getElementById("A");
        let dispplayB = document.getElementById("B");
        let dispplayC = document.getElementById("C");
        let dispplayD = document.getElementById("D");
        question.innerHTML = Question.question;
        dispplayA.innerHTML = Question.answers[0];
        dispplayB.innerHTML = Question.answers[1];
        dispplayC.innerHTML = Question.answers[2];
        dispplayD.innerHTML = Question.answers[3];
        let link = document.getElementById("Erklärung");
        link.innerHTML = Question.link;
        link.style.display = "none";
    }
    //Funktion für die Antworten
    function checkAnswer(answer, correctAnswer) {
        let Check = document.getElementById("Check");
        let link = document.getElementById("Erklärung");
        link.innerHTML = Question.link;
        link.style.display = "none";
        let Farbenwechsel = document.getElementById("Check");
        let WeiterButton = document.getElementById("WeiterButton");
        WeiterButton.style.display = "";
        questioncounter++;
        Buttonactive = false;
        if (answer == correctAnswer) {
            console.log("Richtig");
            pointcounter++;
            Check.innerHTML = "Richtig";
            link.style.display = "block";
            Farbenwechsel.style.background = "green";
            setTimeout(endGame, 1000);
            //Dom Manipulation für die Erklärung
        }
        else {
            console.log("Falsch");
            wrongquestioncounter++;
            Check.innerHTML = "Falsch";
            link.style.display = "block";
            Farbenwechsel.style.background = "red";
            //Dom Manipulation für die Erklärung und die anderen Knöpfe sind nicht mehr klickbar
        }
    }
    //nächste Frage Eventlistener für den Button/ richtig und falsche Antworten werden ausgeblendet beim klick auf den Button
    //Punkte werden angezeigt
    //Spiel wird beendet
    function endGame() {
        if (pointcounter >= 5) {
            let actualpoint = document.getElementById("pointvalue");
            actualpoint.innerHTML = pointcounter.toString() + "" + "Richtige Antworten";
            actualpoint.style.display = "block";
            let actualquestion = document.getElementById("questioncounter");
            actualquestion.innerHTML = questioncounter.toString() + "" + "Versuche";
            actualquestion.style.display = "block";
            let actualwrong = document.getElementById("wrongcounter-value");
            actualwrong.innerHTML = wrongquestioncounter.toString() + "" + "Falsche Antworten";
            actualwrong.style.display = "block";
            let question = document.getElementById("question");
            question.style.display = "none";
            let dispplayA = document.getElementById("A");
            dispplayA.style.display = "none";
            let dispplayB = document.getElementById("B");
            dispplayB.style.display = "none";
            let dispplayC = document.getElementById("C");
            dispplayC.style.display = "none";
            let dispplayD = document.getElementById("D");
            dispplayD.style.display = "none";
            let Check = document.getElementById("Check");
            Check.style.display = "none";
            let WeiterButton = document.getElementById("WeiterButton");
            WeiterButton.style.display = "none";
            let link = document.getElementById("Erklärung");
            link.style.display = "none";
            let nochmal = document.getElementById("nochmal");
            nochmal.style.display = "block";
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
//Für die Antworten nochmal ein shuffle, und eine for schleife, die auf die Buttons zugreift
// const questionContainer  = document.getElementById("questionContainer");
// for (let i = 0; i < questionHTML.length; i++) {
//     let question = questionHTML[i];
//     const div = document.createElement("div");
//     div.innerHTML = `<h3>${question.question}</h3>`;
//     question.answers.forEach(answer => {
//         const answerEl = document.createElement("div");
//         answerEl.innerHTML = answer;
//         div.appendChild(answerEl);
//     });
//     questionContainer.appendChild(div);
// }
// //Fragen
// if ([0] == undefined) {
//     var textGewinnSP: HTMLParagraphElement = document.createElement("p");
//     document.getElementById("test").appendChild(textGewinnSP);
//     textGewinnSP.innerHTML = "Spieler gewinnt!";
//     endGame = true;
// 
//# sourceMappingURL=sript.js.map