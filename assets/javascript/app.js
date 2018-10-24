var countStartNumber = 30;

// Creating a TriviaGame object to hold our logic and variables
var triviaGame = [{

    // Objects to hold questions to be asked in the game
    questionsToAsk: {
        questionOne: {
            question: "When did Nigeria gain independence?",
            options: ["1940","1960","1950","1970","1961"],
            rightOption: "1960"
        },
        questionTwo: {
            question: "Which countries colonized South Africa?",
            options: ["Portugal and France","Britain and France","Netherland and Britain","France and Netherland","Portugal and Britain"],
            rightOption: "Netherland and Britain"
        },
        questionThree: {
            question: "Who designed the Nigeria flag?",
            options: ["Taiwo Akinkunmi","Nnamdi Azikiwe","Olusegun Obasanjo","Mary Slessor","Benedict E. Odiase"],
            rightOption: "Taiwo Akinkunmi"
        },
         questionFour: {
            question: "Which is the longest river in Africa?",
            options: ["Congo river","The Nile river","Zambezi","Limpopo","Blue Nile"],
            rightOption: "The Nile river"
        },
         questionFive: {
            question: "Which is the largest country in Africa?",
            options: ["South Africa","Egypt","Sudan","Libya","Algeria"],
            rightOption: "Algeria"
        },
         questionSix: {
            question: "How many states are there in Nigeria?",
            options: ["40","35","28","41","36"],
            rightOption: "36"
        },
         questionSeven: {
            question: "What year did President Umaru Musa Yar'adua die in office?",
            options: ["2009","2004","2010","2013","2011"],
            rightOption: "2010"
        },
         questionEight: {
            question: "Which is the capital of the USA?",
            options: ["New York","California","Las Vegas","Washginton D.C","Texas"],
            rightOption: "Washginton D.C"
        },
         questionNine: {
            question: "Which is the executive capital of South Africa?",
            options: ["Pretoria","Cape Town","Johannesburg","Bloemfontein","Durban"],
            rightOption: "Pretoria"
        },
         questionTen: {
            question: "Which state is Nollywood based in Nigeria?",
            options: ["Edo","Lagos","Abuja","Cross river","Rivers"],
            rightOption: "Cross river"
        }
    }
}];

// Variable to hold the setInterval
var timer;
// Creating game variables
var questions = triviaGame;
var currentQuestion = 0;
var counter = countStartNumber;
var correct = 0;
var incorrect = 0;

// creating the countdown function
function countdown() {
    counter--;
    // using jQuery to append counter to page
    $("#dcard").text(counter);
    // if counter gets to 0...
    if(counter === 0) {
        console.log("TIME UP!");
        // CALLING THE timeUp function
        timeUp();
    };
};



