
//all global variables
var time = (60);
var timeInterval;
var timerEl = document.querySelector('#time');
var startQuizEl = document.querySelector('#startbtn');
var answerListEl = document.querySelector("#answerList");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("#results");
var initialsInput = document.querySelector("#initials");
var initialsCapture = document.querySelector("#initialsButton");
var finalContainer = document.getElementById("box");
var goBackEl = document.getElementById("goBack");
var clearScoreEl = document.getElementById("#clearHighscore");
//main variable with the questions and the answers
var myQuestions = [
  {
    question: "Commonly used data types do NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts"
  },
  {
    question: "The condition in an if/else statement is enclosed with ______.",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis"
  },
  {
    question: "Arrays in JavaScript can be used to store______.",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
  },
  {
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console log"],
      correctAnswer: "console log"
  },
  
];
//set the questions at zero to start
var currentIndex = 0;
//starting quiz upon user click of the start button//
function quizStart() {
  var kickOff = document.getElementById("welcomebox");
  //hide the welcome screen
  kickOff.setAttribute("class", "hide");

  //this will remove a class for the questions so the first will show on the dom//
  quizContainer.removeAttribute("class");

  //start the timer and countdown by 1 sec//
  timeInterval = setInterval(countdown,1000);
  timerEl.textContent = time;
  buildQuiz();
}


//run thru the questions in the array of myQuestions
function buildQuiz() {
  var currentQuestion = myQuestions[currentIndex];
  var questionTitle = document.getElementById("questionTitle");
  questionTitle.textContent = currentQuestion.question;
  answerListEl.innerHTML = "";
  //loop over the choices//
  currentQuestion.answers.forEach(function(answer, i) {
    var btnAnswer = document.createElement("button");
    btnAnswer.setAttribute("class", "answer");
    btnAnswer.setAttribute("value", answer);
    btnAnswer.textContent = i + 1 + ". " + answer;

    btnAnswer.onclick = giveResults;
    answerListEl.appendChild(btnAnswer);
  });
}
  
//look at each answer and check it
function giveResults() {
  //check if the user guessed wrong
  if(this.value === myQuestions[currentIndex].correctAnswer) {
    currentIndex++;
  } else {
  //-10 seconds if wrong
    time -= 10;
    currentIndex++;
    if(time <0) {
      time = 0;
      clearInterval(timeInterval);
      endQuiz();
    } 
  }
  //display new time on page (minus 10 secs)
    timerEl.textContent = time;
  //if right no action, just move on
   
  //have we run out of questions (max 5)?
    if(currentIndex === myQuestions.length) {
      endQuiz();
    } else {
      buildQuiz();
    }
  }


//finish the quiz by showing the final score screen and hiding the questions
function endQuiz() {
  clearInterval(timeInterval);
  var showFinal = document.getElementById("box");
  showFinal.removeAttribute("class");
  var finalScore = document.getElementById("results");
  finalScore.textContent = time;
  quizContainer.setAttribute("class", "hide");
  
}

//display user score
function highScore() {
  var showScore = document.getElementById("highscore");
  showScore.removeAttribute("class");
  finalContainer.setAttribute("class", "hide");
  var scoreBox = document.getElementById("initialsScore");
  scoreBox.textContent = time;
};


//build the timer
function countdown() {
    time--;
    timerEl.textContent = time;
    //end game if time runs out//
    if (time <= 0) {
      endQuiz();
    }
  }


function goBack() {
  var restart = document.getElementById("highscore");
  restart.setAttribute("class", "hide");
  quizStart();
  currentIndex = 0;
}
//listen for click on Start and kickoff quiz
startQuizEl.addEventListener('click',quizStart);

//if the user clicks the Go back button then restart the game
goBackEl.addEventListener("click", goBack);

//get user initials at the finish and store them
initialsCapture.addEventListener("click", function(event) {
  event.preventDefault();
  var user = {
    initials: initialsInput.value.trim(),
  };
  localStorage.setItem("user", JSON.stringify(user));

highScore();
})