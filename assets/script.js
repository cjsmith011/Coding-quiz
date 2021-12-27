
//add variables here
var timerEl = document.querySelector('#startbtn');
var startQuizEl = document.querySelector('start');


var container = document.querySelector(".container");

//build the welcome funtionality: when the visitor clicks on Start, 
//start the timer and go to question div
//hide the Welcome screen and unhide the Question screen

//should the questions be a series of arrays?
//should the answers be arrays?
//
//var question = indexQuestions[0];

//

//Question 1 show the 4 options as buttons that can be clicked
//return "Wrong" for the 3 wrong answers
//return "Right" for the 1 right answer


//Question 2



//deduct 10 seconds from the timer if wrong answer

//add the hiding piece

//add the remove piece

container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");

  if (state === "hidden") {
    
    element.dataset.state = "visible";
  } else {
    element.textContent= "";
    CustomElementRegistry.setAttribute("data-state", "hidden");

  }
    
  }
});

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
            displayMessage();
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



