"use strict";
var Auswahl;
(function (Auswahl) {
    console.log("Verklinkung funktioniert");
    window.addEventListener("load", handleLoad);
    let Questions = [];
    let pointcounter = 0;
    let questioncounter = 0;
    let wrongquestioncounter = 0;
    let endGame = false;
    //Template für Fragen
    //{question: "", answers: ["", "","",""], correctAnswer: "", link: ""},
    //Fragen für Themen Arrays
    let HMTLQuestion = [
        { question: "Ist HTML eine Programmiersprache?", answers: ["Ja", "Nein", "vielleicht", "Nur Montags"], correctAnswer: "Nein", link: "" },
        { question: "Für was steht das ML in HTML", answers: ["Markup Language", "Mayonese Love", "Multiply Language", "Mega Language"], correctAnswer: "Markup Language", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
        { question: "Welche Tags müssen nicht geschlossen werden?", answers: ["void", "p", "h", "div"], correctAnswer: "void", link: "https://felix.hs-furtwangen.de/m/cd997f63ae79858c56cdd00e2f3e7556/L02_Einstieg_HTML.pdf" },
        { question: "Welches Metachrt wird üblich verwendet", answers: ["USA-5", "UTF-8", "WWW", "UTF-3"], correctAnswer: "UTF-8", link: "" },
        { question: "Aus was bestehen die meisten HTML Tags", answers: ["Einen öffenden Tag und einen schließenden Tag", "Einen Selektor", "Einen Link", "Haben keine Gemeinsamkeiten"], correctAnswer: "Einen öffenden Tag und einen schließenden Tag", link: "" },
        { question: "Wie sollten CSS Elemente am besten eingebungen werden ", answers: ["inline", "", "", ""], correctAnswer: "", link: "" },
        { question: "Wie wirde das Wort Semantik noch genannt", answers: ["Praxis", "Zeichen", "Theorie", "Bedeutungslehre"], correctAnswer: "Bedeutungslehre", link: "https://felix.hs-furtwangen.de/m/e4d06cfb1be786728869f70d91dfa7e2/L03_HTML5_Familie.pdf" },
        { question: "Was Element ist bei einer HTML Element an ertser Stelle", answers: ["<footer>", "<header>", "<main>", "<head>"], correctAnswer: "<head>", link: "https://felix.hs-furtwangen.de/m/e4d06cfb1be786728869f70d91dfa7e2/L03_HTML5_Familie.pdf" },
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
        console.log("lll");
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
        update();
        console.log("HALLO");
    }
    function update() {
        //Clear Inner HTML für alle Buttons und die Frage
        let wrong2 = document.getElementById("falsch");
        wrong2.style.display = "none";
        console.log("update");
        let Question;
        Question = Questions[0];
        Questions.splice(0, 1);
        for (let i = 0; i < 8; i++) {
            //gibt eine zufällige Zahl zwischen 0 und 3 aus aus dem Array
            let loc1 = Math.floor(Math.random() * Question.answers.length);
            let loc2 = Math.floor(Math.random() * Question.answers.length);
            //Antworten wird neu zugewiesen/ dient als Platzhalter
            let tmp = Question.answers[loc1];
            //Antworten werden vertauscht
            Question.answers[loc1] = Question.answers[loc2];
            Question.answers[loc2] = tmp;
        }
        //DOM Manipulation mit den INformationen aus Question
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
        //Eventlistener für die Buttons
        let buttonA = document.getElementById("A");
        let buttonB = document.getElementById("B");
        let buttonC = document.getElementById("C");
        let buttonD = document.getElementById("D");
        buttonA.addEventListener("click", function () { checkAnswer(Question.answers[0], Question.correctAnswer); });
        buttonB.addEventListener("click", function () { checkAnswer(Question.answers[1], Question.correctAnswer); });
        buttonC.addEventListener("click", function () { checkAnswer(Question.answers[2], Question.correctAnswer); });
        buttonD.addEventListener("click", function () { checkAnswer(Question.answers[3], Question.correctAnswer); });
        //Funktion für die Antworten
        function compareAnswers(answer, correctAnswer) {
            if (answer == correctAnswer) {
                return true;
            }
            else {
                return false;
            }
        }
        function checkAnswer(answer, correctAnswer) {
            if (compareAnswers(answer, correctAnswer) == true) {
                console.log("Richtig1");
                pointcounter++;
                questioncounter++;
                ;
                rightAnswers();
            }
            else {
                console.log("Falsch");
                wrongAnswers();
                wrongquestioncounter++;
                questioncounter++;
                console.log(questioncounter);
            }
        }
        //Richtige Antowrten werden angezeigt
        function rightAnswers() {
            let right = document.getElementById("richtig");
            right.style.display = "block";
            let wrong = document.getElementById("falsch");
            wrong.style.display = "none";
            console.log("Haool");
        }
        //Falsche Antworten werden angezeigt
        function wrongAnswers() {
            console.log("Falsch");
            let wrong = document.getElementById("falsch");
            wrong.style.display = "block";
            let right2 = document.getElementById("richtig");
            right2.style.display = "none";
        }
        //nächste Frage Eventlistener für den Button/ richtig und falsche Antworten werden ausgeblendet beim klick auf den Button
        let nextQ = document.getElementById("nextQ");
        nextQ.addEventListener("click", function () {
            console.log("nextQ");
            update();
            let right2 = document.getElementById("richtig");
            right2.style.display = "none";
        });
    }
    //Punkte werden angezeigt
    function showPoi() {
        let points = document.getElementById("counter-value");
        points.innerHTML = pointcounter.toString();
        let wrongpoints = document.getElementById("wrongcounter-value");
        wrongpoints.innerHTML = wrongquestioncounter.toString();
    }
    //Spiel wird beendet
    function goalCounter() {
        if (pointcounter == 5) {
            endGame();
        }
    }
    //function endGame(): void { 
    let end = document.getElementById("End");
    end.style.display = "block";
    let hidden = document.getElementById("question-container");
    hidden.style.display = "none";
    let hidden2 = document.getElementById("End");
    hidden2.style.display = "block";
    let hidden3 = document.getElementById("ResultR");
    hidden3.style.display = "none";
    let hidden4 = document.getElementById("wrong");
    hidden4.style.display = "none";
    let hidden5 = document.getElementById("Themengebiet");
    hidden5.style.display = "block";
    let hidden6 = document.getElementById("question");
    hidden6.style.display = "block";
    let hidden7 = document.getElementById("A");
    hidden7.style.display = "block";
    let hidden8 = document.getElementById("B");
    hidden8.style.display = "block";
    let hidden9 = document.getElementById("C");
    hidden9.style.display = "block";
    let hidden10 = document.getElementById("D");
    hidden10.style.display = "block";
    let hidden11 = document.getElementById("End");
    hidden11.style.display = "block";
    let hidden12 = document.getElementById("ResultR");
    hidden12.style.display = "block";
    let hidden13 = document.getElementById("wrong");
    hidden13.style.display = "block";
    let hidden14 = document.getElementById("End");
    hidden14.style.display = "block";
    let hidden15 = document.getElementById("ResultR");
    hidden15.style.display = "block";
    let hidden16 = document.getElementById("wrong");
    hidden16.style.display = "block";
    let hidden17 = document.getElementById("End");
    hidden17.style.display = "block";
    let hidden18 = document.getElementById("ResultR");
    hidden18.style.display = "block";
    let hidden19 = document.getElementById("wrong");
    hidden19.style.display = "block";
    let hidden20 = document.getElementById("End");
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