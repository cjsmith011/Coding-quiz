
//add variables here
var timerEl = document.querySelector('#startbtn');
var startQuizEl = document.querySelector('#startbtn');

//var question1El = document.querySelector('q1options');
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var myQuestions = [
  {
    question: "Commonly used data types do NOT include:",
    answers: {
      1: "strings",
      2: "booleans",
      3: "alerts",
      4: "numbers"
    },
    correctAnswer: "3"
  },
  {
    question: "The condition in an if/else statement is enclosed with ______.",
    answers: {
      1: "quotes",
      2: "curly brackets",
      3: "parenthesis",
      4: "square brackets"
    },
    correctAnswer: "3"
  },
  {
    question: "Arrays in JavaScript can be used to store______.",
    answers: {
      1: "numbers and strings",
      2: "other arrays",
      3: "booleans",
      4: "all of the above"
    },
    correctAnswer: "4"
  },
  {
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answers: {
      1: "commas",
      2: "curly brackets",
      3: "quotes",
      4: "parenthesis"
    },
    correctAnswer: "3"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
      1: "JavaScript",
      2: "terminal/bash",
      3: "for loops",
      4: "console log"
    },
    correctAnswer: "4"
  },
  
];

function buildQuiz() {

  var output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      var answers = [];

      for(number in currentQuestion.answers){
        answers.push(
          `<label>
          <input type="radio" class="qbtn" name="question${questionNumber} value=${number}">
          ${number} :
          ${currentQuestion.answers[number]}
          </label>`
        );
      }
     output.push(
       `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join('')} </div>`
     ); 
    }
  );
  quizContainer.innerHTML = output.join('');
}

function giveResults() {
  var answerHandlers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;
  myQuestions.forEach( (currentQuestion,questionNumber) => {
    var answerHandler = answerHandlers[questionNumber];
    var selector = `input[name=question${questionNumber}]:checked`;
    var userAnswer = (answerHandler.querySelector(selector) || {}).value;
    
    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;

      answerHandlers[questionNumber].style.color = "green";
      
    } else {
      answerHandlers[questionNumber].style.color = "darkred";

    }
 
  });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

}

// function question1() {
//   console.log("question 1 is starting");
//   for (var i=0; i <answers1.length; i++) {
//     var btn1 = document.createElement("button");
//     var t = document.createTextNode(answers1[i]);
//     btn1.appendChild(t);
//     question1El.appendChild(btn1);
//   }
//   question1();

//   function answer1Select (event) {
//       var response = event.target;
    
//       if (onclick = answers1[3] {
//       response.textContent = "Your answer is Correct!"    
//       } else {
//       response.textContent = "Your answer is wrong, :(";
//      } 
// }

//should the answers be arrays?
//target the correct answer in the array and then do an if/then to return wrong/right
//var question = indexQuestions[0];

//

//Question 1 show the 4 options as buttons that can be clicked
//return "Wrong" for the 3 wrong answers
//return "Right" for the 1 right answer


//Question 2

//

//deduct 10 seconds from the timer if wrong answer

//add the unhiding piece
// startQuizEl.addEventListener("click", function() {
//   var z = document.getElementsByClassName("box");
//   if (z.style.display === "none"); {
//     z.style.display = "block";
//   } else {
//     z.style.display = "none";
//   }
// })

//add the remove piece

// container.addEventListener("click", function(event) {
//   var element = event.target;

//   if (element.matches(".box")) {
//     var state = element.getAttribute("data-state");

//   if (state === "hidden") {
    
//     element.dataset.state = "visible";
//   } else {
//     element.textContent= "";
//     CustomElementRegistry.setAttribute("data-state", "hidden");

//   }
    
//   }
// });

//build the timer
function countdown() {
  console.log("countdown");
    var timeLeft = 60;
    var timeInterval = setInterval(function() {
        if (timeLeft >1) {
        timer.textContent = "Timer: " + timeLeft;
        timeLeft--;
        } else {
            timer.textContent = "Time is up!";
            clearInterval(timeInterval);
        }
    }, 1000);
    };
//when the user clicks on Start Quiz, then start the timer    
 timerEl.addEventListener("click", function() {
  countdown();
 });

//build the high score link

//build the function that will welcome the user

//build the 5 functions that will run thru the questions

//build the function that will run the score and allow user input of initials

buildQuiz();

submitButton.addEventListener('click', giveResults);
