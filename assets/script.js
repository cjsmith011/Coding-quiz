console.log = window.alert("Welcome to the quiz!");
//add variables here
var timerEl = document.getElementById('timer');

//initial screen with welcome message, timer and View high score

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

//build the function that will run thru the questions

//build the function that will run the score and allow user input of initials







countdown();
