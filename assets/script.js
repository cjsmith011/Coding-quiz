
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
  

function giveResults() {
  //check if the user guessed wrong
  if(this.value !== myQuestions[currentIndex].correctAnswer) {
    
  //-10 seconds if wrong
    time -= 10;
    if(time <0) {
      time = 0;
      clearInterval(timeInterval);
      endQuiz();
    }
  //display new time on page (minus 10 secs)
    timerEl.textContent = time;
  //if right no action, just move on
    currentIndex++;
  //have we run out of questions (max 5)?
    if(currentIndex === myQuestions.length) {
      endQuiz();
    } else {
      buildQuiz();
    }
  }
}
function endQuiz() {
  clearInterval(timeInterval);
  var showFinal = document.getElementById("box");
  showFinal.removeAttribute("class");
  var finalScore = document.getElementById("results");
  finalScore.textContent = time;
  quizContainer.setAttribute("class", "hide");
  

}

function highScore() {
  var showScore = document.getElementById("highscore");
  showScore.removeAttribute("class");
  finalContainer.setAttribute("class", "hide");
  var scoreBox = document.getElementById("initialsScore");
  scoreBox.textContent = time;
};
//high score, get value of the input box, value can't be empty (if)
//get the save scores from local storage, if null then empty array
//variable for score
//create an object for the score for the current user - score is time
//save it in local storage and build a high score html page
//3 buttons - start, score, initials entered?  check for the enter



//build the timer
function countdown() {
  console.log("countdown");
    time--;
    timerEl.textContent = time;
    //end game if time runs out//
    if (time <= 0) {
      endQuiz();
    }
  }


startQuizEl.addEventListener('click',quizStart);
//submitButton.addEventListener('click', giveResults);


//get user initials at the finish and store them
initialsCapture.addEventListener("click", function(event) {
  event.preventDefault();
  var user = {
    initials: initialsInput.value.trim(),
  };
  localStorage.setItem("user", JSON.stringify(user));

highScore();
});

goBackEl.addEventListener('click',quizStart);

clearScoreEl.addEventListener('click',scoreBox.textContent= "");