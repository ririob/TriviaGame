// Creating Global variables
var countStartNumber = 30;
var mainDiv = $("#xcard");
var myAudio = document.createElement("audio");
myAudio.src = "assets/images/song.mp3";

// Creating a TriviaGame object to hold our logic and variables
var triviaGame = [{
            question: "When did Nigeria gain independence?",
            options: ["1940","1960","1950","1970","1961"],
            rightOption: "1960",
            image: "assets/images/1960.gif"
        }, {
            question: "Which countries colonized South Africa?",
            options: ["Portugal and France","Britain and France","Netherland and Britain","France and Netherland","Portugal and Britain"],
            rightOption: "Netherland and Britain",
            image: "assets/images/dutchbritain.gif"
        }, {
            question: "Who designed the Nigeria flag?",
            options: ["Taiwo Akinkunmi","Nnamdi Azikiwe","Olusegun Obasanjo","Mary Slessor","Benedict E. Odiase"],
            rightOption: "Taiwo Akinkunmi",
            image: "assets/images/taiwoakinkunmi.jpg"
        }, {
            question: "Which is the longest river in Africa?",
            options: ["Congo river","The Nile river","Zambezi","Limpopo","Blue Nile"],
            rightOption: "The Nile river",
            image: "assets/images/nileriver.jpg"
        }, {
            question: "Which is the largest country in Africa?",
            options: ["South Africa","Egypt","Sudan","Libya","Algeria"],
            rightOption: "Algeria",
            image: "assets/images/malgeria.gif"
        }, {
            question: "How many states are there in Nigeria?",
            options: ["40","35","28","41","36"],
            rightOption: "36",
            image: "assets/images/36-States-of-Nigeria.jpg"
        }, {
            question: "What year did President Umaru Musa Yar'adua die in office?",
            options: ["2009","2004","2010","2013","2011"],
            rightOption: "2010",
            image: "assets/images/presidentmusa.jpg"
        }, {
            question: "Which is the capital of the USA?",
            options: ["New York","California","Las Vegas","Washginton D.C","Texas"],
            rightOption: "Washginton D.C",
            image: "assets/images/washgintondc.jpg"
        }, {
            question: "Which is the administrative capital of South Africa?",
            options: ["Pretoria","Cape Town","Johannesburg","Bloemfontein","Durban"],
            rightOption: "Pretoria",
            image: "assets/images/pretoriasa.jpg"
        }, {
            question: "Which country won the 2018 FIFA world cup?",
            options: ["Argentina","England","Spain","France","Germany"],
            rightOption: "France",
            image: "assets/images/france2018.jpg"
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
        // console.log("TIME UP!");
        // CALLING THE timeUp function(Which has not been created at this point)
        timeUp();
    };
};

// Creating the questionView function
function loadQuestion() {
    // setting the timer to countdown for each question
    timer = setInterval(countdown, 1000);
    // Using jQuery to to append questions to the page
    mainDiv.html("<h6>" + questions[currentQuestion].question + "</h6>");
    // Now looping throung through the answers array in the question object
    for (var i = 0; i < questions[currentQuestion].options.length; i++){
        // using jQuery to append answers buttons to the questions div
        mainDiv.append("<button class=\"btn btn-danger\" id=\"answer-button\" data-name='" + questions[currentQuestion].options[i] + "'>" + questions[currentQuestion].options[i] + "</button>");
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

// Creating the timeUp function
function timeUp() {
    // Clearinng our timer
    clearInterval(timer);
    // Using jQuery to append the counter to to the counnter div
    $("#scard").text(counter);
    // Message to show when time is up
    mainDiv.html("<h4>Time's Up!</h4>");
    mainDiv.append("<h5>The Correct Answer was: " + questions[this.currentQuestion].rightOption);
    mainDiv.append("<img src=\"" + questions[currentQuestion].image + "\" class=\"question-img\">");
    // if currentQuestion has reached the questions limit,
    if(currentQuestion === questions.length - 1) {
        // show results
        setTimeout(results, 3 * 1000);
    }
    else {
        // show the next question
        setTimeout(nextQuestion, 3 * 1000);
    };
};

    // Creating the results disply function
    function results() {
        // clearing the timer
        clearInterval(timer);
        // Displaying results(appending to question div)
        mainDiv.html("<h5>All done, here's how you did!");
        // appending counter to counter div(using jQuery of course)
        $("#scard").text(counter);
        // Still display results
        mainDiv.append("<h6>Correct Answer: " + correct + "</h6>");
        mainDiv.append("<h6>Wrong Answers: " + incorrect + "</h6>");
        mainDiv.append("<h6>Unanswered: " + (questions.length - (incorrect + correct)) + "</h6>");
        // Creating a button to start over
        mainDiv.append("<br><button class=\"btn btn-danger\" id=\"start-over\">Restart?</button>");
    };

    // Creating function for when answers are clicked
    function clicked(e) {
        // clearing the timer
        clearInterval(timer);
        // now if the answer clicked is the right answer...
        if($(e.target).attr("data-name") === questions[currentQuestion].rightOption) {
            // answer is right (function has not been created)
            answeredCorrectly();
        }
        else {
            // answer is wrong (function has not been created)
            answeredIncorrectly();
        }
    };

// Creating the incorrect answers function
function answeredIncorrectly() {
    // increase the incorrect answers
    incorrect++;
    // clearing the timer
    clearInterval(timer);
    // Displaying the incorrect answer results
    mainDiv.html("<h5>Nope!</h5>");
    mainDiv.append("<h6>The Correct Answer was: " + questions[currentQuestion].rightOption + "</h6>");
    mainDiv.append("<img src=\"" + questions[currentQuestion].image + "\" class=\"question-img\"/>");
    // if questions gets to the limit...
    if (currentQuestion === questions.length - 1) {
        // show results
        setTimeout(results, 3 * 1000);
    }
    else {
        // go to next question
        setTimeout(nextQuestion, 3 * 1000);
    }
};

// Creating the correct answers function
function answeredCorrectly() {
    // clear timer
    clearInterval(timer);
    // increase the correct answers score
    correct++;
    // Display the correct answer details
    mainDiv.html("<h5>You are Correct! Congratulations!</h5>");
    mainDiv.append("<img src=\"" + questions[currentQuestion].image + "\" class=\"question-img\"/>");
    // if questions get to limit
    if(currentQuestion === questions.length - 1) {
        // show results
        setTimeout(results, 3 * 1000);
    }
    else{
        // go to next question
        setTimeout(nextQuestion, 3  * 1000);
    }
};

// Creating function to reset the game
function reset() {
    currentQuestion = 0;
    counter = countStartNumber;
    correct = 0;
    incorrect =  0;
    loadQuestion();
};


//  CLICK EVENTS
// when restart button is clicked
$(document).on("click", "#start-over", function() {
    reset();
});
// when answer button is clicked
$(document).on("click", "#answer-button", function(e) {
    clicked(e);
});
// when start button is clicked at beginning of game
$(document).on("click", "#start", function() {
    loadQuestion();
    myAudio.play();
});

// calling all functions 
// countdown();
// loadQuestion();
// nextQuestion();
// timeUp();
// results();
// clicked();
// answeredIncorrectly();
// answeredCorrectly();
// reset();




