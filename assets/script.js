
//add variables here
var timerEl = document.querySelector('#startbtn');
var startQuizEl = document.querySelector('#startbtn');

var question1El = document.querySelector('q1options');
var quizContainer = document.getElementById("quiz");
var myQuestions = [
  {
    question: "Commonly used data types do NOT include:",
    answers: {
      a: "1. strings",
      b: "2. booleans",
      c: "3. alerts",
      d: "4. numbers"
    },
    correctAnswer: "c"
  },
  {
    question: "The condition in an if/else statement is enclosed with ______.",
    answers: {
      a: "1. quotes",
      b: "2. curly brackets",
      c: "3. parenthesis",
      d: "4. square brackets"
    },
    correctAnswer: "c"
  }
];

function buildQuiz() {

  var output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      var answers = [];

      for(letter in currentQuestion.answers){
        answers.push(
          `<label>
          <input type="button" name="question${questionNumber}" value=${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
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

// var answers1 = ["1.strings", "2.booleans", "3.alerts", "4.numbers"];
// document.getElementById("answers1Print").innerHTML = answers1;

// console.log(answers1 [2]);
// //create clickable event for each answer

// //if 



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

