console.log = window.alert("Welcome to the quiz!");
//add variables here
var body = document.body;
var timerEl = document.getElementById('timer');
var questionList = document.createElement("ol");
var startQuizbtn = document.querySelector('#start');


//initial screen with welcome message, timer and View high score
function welcome() {
    var startQuiz = document.createElement("div");
    startQuiz.textContent = "Coding Quiz Challenge!  Try to answer the following code-related qusetions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    startQuiz.setAttribute("style", "padding:20px; background:grey; text-align:center; margin:80px 80px");
    var startQuizbtn = document.createElement("button");
    startQuizbtn.className = "start-button";
    startQuizbtn.id = "start";
    startQuizbtn.textContent = "Start!";
    
    body.appendChild(startQuiz);
    startQuiz.appendChild(startQuizbtn);
};
//click to start the timer

//start the quiz
function quizQuestion1() {
    var questionOne = document.createElement("div");
    questionOne.textContent ="Commonly used data types do NOT include:";
    var one1btn = document.createElement("button");
    one1btn.className = "answer-button";
    one1btn.textContent = "1.strings";
    var one2btn = document.createElement("button");
    one2btn.className = "answer-button";
    one2btn.textContent = "2. booleans";
    var one3btn = document.createElement("button");
    one3btn.className = "answer-button";
    one3btn.textContent = "3. alerts";
    var one4btn = document.createElement("button");
    one4btn.className = "answer-button";
    one4btn.textContent = "4. numbers";

    body.appendChild(questionOne);
    questionOne.appendChild(one1btn, one2btn, one3btn, one4btn);
    //add in user input of selecting one3btn add a prompt of Correct or Wrong for the other 3 btns
    //then go to the next function

};

function quizQuestion2() {
    var questionTwo = document.createElement("div");
    questionTwo.textContent ="The condition in an if/else statement is enclosed with________.";
    var two1btn = document.createElement("button");
    two1btn.className = "answer-button";
    two1btn.textContent = "1. quotes";
    var two2btn = document.createElement("button");
    two2btn.className = "answer-button";
    two2btn.textContent = "2. curly brackets";
    var two3btn = document.createElement("button");
    two3btn.className = "answer-button";
    two3btn.textContent = "3. parenthesis";
    var two4btn = document.createElement("button");
    two4btn.className = "answer-button";
    twp4btn.textContent = "4. square brackets";

    body.appendChild(questionTwo);
    questionTwo.appendChild(two1btn, two2btn, two3btn, two4btn);
    //add in user input of selecting two2btn add a prompt of Correct or Wrong for the other 3 btns
    //then go to the next function
};

function quizQuestion3() {
    var questionThree = document.createElement("div");
    questionThree.textContent ="The condition in an if/else statement is enclosed with________.";
    var three1btn = document.createElement("button");
    three1btn.className = "answer-button";
    three1btn.textContent = "1. numbers and strings";
    var three2btn = document.createElement("button");
    three2btn.className = "answer-button";
    three2btn.textContent = "2. other arrays";
    var three3btn = document.createElement("button");
    three3btn.className = "answer-button";
    three3btn.textContent = "3. booleans";
    var three4btn = document.createElement("button");
    three4btn.className = "answer-button";
    three4btn.textContent = "4. all of the above";

    body.appendChild(questionThree);
    questionThree.appendChild(three1btn, three2btn, three3btn, three4btn);
    //add in user input of selecting three4btn add a prompt of Correct or Wrong for the other 3 btns
    //then go to the next function
};

function quizQuestion4() {
    var questionFour = document.createElement("div");
    questionFour.textContent ="The condition in an if/else statement is enclosed with________.";
    var four1btn = document.createElement("button");
    four1btn.className = "answer-button";
    four1btn.textContent = "1. commas";
    var four2btn = document.createElement("button");
    four2btn.className = "answer-button";
    four2btn.textContent = "2. curly brackets";
    var four3btn = document.createElement("button");
    four3btn.className = "answer-button";
    four3btn.textContent = "3. quotes";
    var four4btn = document.createElement("button");
    four4btn.className = "answer-button";
    four4btn.textContent = "4. parenthesis";

    body.appendChild(questionFour);
    questionFour.appendChild(four1btn, four2btn, four3btn, four4btn);
    //add in user input of selecting two2btn add a prompt of Correct or Wrong for the other 3 btns
    //then go to the next function
};

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

startQuizbtn.addEventListener("click", quizQuestion1);

welcome();
countdown();
