console.log = window.alert("Welcome to the quiz!");
//add variables here
var body = document.body;


var timerEl = document.getElementById('timer');
var startQuizEl = document.querySelector("#quizcontent");
var questions = document.querySelector("#Questions");


//initial screen with welcome message, timer and View high score
function welcome() {
    var startQuiz = document.createElement("div");
    startQuiz.textContent = "Coding Quiz Challenge!  Try to answer the following code-related qusetions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    startQuiz.setAttribute("style", "padding:20px; background:grey; text-align:center; margin:80px 80px");
    var startQuizbtn = document.createElement("button");
    startQuizbtn.className = "start-button";
    startQuizbtn.textContent = "Start!";
    
    body.appendChild(startQuiz);
    startQuiz.appendChild(startQuizbtn);
};
//click to start the timer

//build the timer
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function() {
        if (timeLeft >1) {
        timerEl.textContent = "Timer: " + timeLeft;
        timeLeft--;
        } else {
            timerEl.textContent = "Time is up!";
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
    };


//build the high score link

//build the function that will welcome the user

//build the 5 functions that will run thru the questions

//build the function that will run the score and allow user input of initials

body.setAttribute("style", "margin:25px");

welcome();
countdown();
