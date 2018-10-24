var countStartNumber = 30;

// Creating a TriviaGame object to hold our logic and variables
var triviaGame = [{
            question: "When did Nigeria gain independence?",
            options: ["1940","1960","1950","1970","1961"],
            rightOption: "1960"
        }, {
            question: "Which countries colonized South Africa?",
            options: ["Portugal and France","Britain and France","Netherland and Britain","France and Netherland","Portugal and Britain"],
            rightOption: "Netherland and Britain"
        }, {
            question: "Who designed the Nigeria flag?",
            options: ["Taiwo Akinkunmi","Nnamdi Azikiwe","Olusegun Obasanjo","Mary Slessor","Benedict E. Odiase"],
            rightOption: "Taiwo Akinkunmi"
        }, {
            question: "Which is the longest river in Africa?",
            options: ["Congo river","The Nile river","Zambezi","Limpopo","Blue Nile"],
            rightOption: "The Nile river"
        }, {
            question: "Which is the largest country in Africa?",
            options: ["South Africa","Egypt","Sudan","Libya","Algeria"],
            rightOption: "Algeria"
        }, {
            question: "How many states are there in Nigeria?",
            options: ["40","35","28","41","36"],
            rightOption: "36"
        }, {
            question: "What year did President Umaru Musa Yar'adua die in office?",
            options: ["2009","2004","2010","2013","2011"],
            rightOption: "2010"
        }, {
            question: "Which is the capital of the USA?",
            options: ["New York","California","Las Vegas","Washginton D.C","Texas"],
            rightOption: "Washginton D.C"
        }, {
            question: "Which is the executive capital of South Africa?",
            options: ["Pretoria","Cape Town","Johannesburg","Bloemfontein","Durban"],
            rightOption: "Pretoria"
        }, {
            question: "Which state is Nollywood based in Nigeria?",
            options: ["Edo","Lagos","Abuja","Cross river","Rivers"],
            rightOption: "Cross river"
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
    $("#scard").text(counter);
    // if counter gets to 0...
    if(counter === 0) {
        console.log("TIME UP!");
        // CALLING THE timeUp function(Which has not been created at this point)
        timeUp();
    };
};

// Creating the questionView function
function loadQuestion() {
    // setting the timer to countdown for each question
    timer = setInterval(countdown, 1000);
    // Using jQuery to to append questions to the page
    $("#xcard").html("<h6>" + questions[this.currentQuestion].question + "</h6>");
    // Now looping throung through the answers array in the question object
    for (var i = 0; i < questions[this.currentQuestion].options.length; i++){
        // using jQuery to append answers buttons to the questions div
        $("#xcard").append("<button class=\"btn btn-dark\" id=\"button\" data-name='" + questions[this.currentQuestion].options[i] + "'>" + questions[this.currentQuestion].options[i] + "</button>");
    };
};

// Creating function to bring the next question as soon as time runs out
function nextQuestion() {
    // setting counter to 30seconds
    counter = countStartNumber;
    // Using jQuery to append counter to counter div
    $("#scard").text(counter);
    // Tellimngthe function to show the next question as soon as time runs out
    currentQuestion++;
    // calling the loadQuestion function to show the next question and answers
    loadQuestion();
};





