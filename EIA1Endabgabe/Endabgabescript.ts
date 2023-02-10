namespace EIA1Endabgabe2223 {
    

    //Globale Variablen

    let startButton: HTMLButtonElement=<HTMLButtonElement> document.getElementById("start-btn");
    let questionContainerElement = document.getElementById("question-container");
    startButton.addEventListener("click", startGame);

//Start des Spiels durch drücken des Start Buttons
function startGame():void {
      console.log("Start");
      startButton.classList.add("hide");
      questionContainerElement?.classList.remove("hide");
      //setNextQuestion();
            }
}


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

]

//let questionHTML:string[]=[
// " question Ist HTML eine Programmiersprache",
//     {text: "Ja", correct: false};
//     {text: "Nein", correct: true }
// }




;
let questionCSS:string[]=[];
let questionTypesscript:string[]=[];

//Antwort Boolean

//Antwort HTML


//Antwort CSS


//Antwort Typescript






