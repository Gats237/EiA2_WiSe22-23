"use strict";
var EIA1Endabgabe2223;
(function (EIA1Endabgabe2223) {
    //Globale Variablen
    let startButton = document.getElementById("start-btn");
    let questionContainerElement = document.getElementById("question-container");
    startButton.addEventListener("click", startGame);
    //Start des Spiels durch drücken des Start Buttons
    function startGame() {
        console.log("Start");
        startButton.classList.add("hide");
        questionContainerElement?.classList.remove("hide");
        //setNextQuestion();
    }
})(EIA1Endabgabe2223 || (EIA1Endabgabe2223 = {}));
// Fragen bereich
const Questions = [{
        id: 0,
        q: "What is capital of India?",
        a: [{ text: "gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
            { text: "mumbai", isCorrect: false }
        ]
    },
    {
        id: 1,
        q: "What is the capital of Thailand?",
        a: [{ text: "Lampang", isCorrect: false, isSelected: false },
            { text: "phuket", isCorrect: false },
            { text: "Ayutthaya", isCorrect: false },
            { text: "Bangkok", isCorrect: true }
        ]
    },
    {
        id: 2,
        q: "What is the capital of Gujarat",
        a: [{ text: "surat", isCorrect: false },
            { text: "vadodara", isCorrect: false },
            { text: "gandhinagar", isCorrect: true },
            { text: "rajkot", isCorrect: false }
        ]
    }
];
let questionCSS = [];
let questionTypesscript = [];
//Antwort Boolean
//Antwort HTML
//Antwort CSS
//Antwort Typescript
//# sourceMappingURL=Endabgabescript.js.map