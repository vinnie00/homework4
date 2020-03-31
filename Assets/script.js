let questionArr = [
    {
        question: "What do you use to send a message to a user",
        answers: ["alert()", "notify()", "console.log()", "message()"],
        correctAnswer: "alert()"
    },
    {
        question: "Who made the Javascript language",
        answers: ["Java", "Google", "Netscape", "Nexus"],
        correctAnswer: "Netscape"
    },
    {
        question: "Which symbol is used single line comments in Javascript?",
        answers: ["/* */", "//", "Comment", "<!-- -->"],
        correctAnswer: "//"
    },
    {
        question: "Which is not a Javascript data type",
        answers: ["Number", "String", "Boolean", "Data"],
        correctAnswer: "Data"
    },
    {
        question: "What is not a variable type",
        answers: ["var", "let", "const", "assign"],
        correctAnswer: "assign"
    }
]
var startButton = document.getElementById("start-button")
var questionDiv = document.getElementById("question")
var answerDiv = document.getElementById("answers")
var resultDiv = document.getElementById("result")
var counterDiv = document.getElementById("question-counter")
var timeDiv = document.getElementById("time-counter")
var scoreDiv = document.getElementById("score-counter")
var qIndex = 0;
var score = 0;
var time = 60;
var timerId;
scoreDiv.innerHTML = score

function getScores() {
}

startButton.addEventListener("click", startGame)
function startGame() {
    timerId = setInterval(clockTick, 1000)
    askQuestion()
}

function clockTick() {
        time--;
        timeDiv.textContent = time
        if (time < 0) {
            clearInterval(timerId);
        }
    };

function askQuestion() {
    if (qIndex>4) {
        endGame()
    } else {
        answerDiv.innerHTML = ""
        var questionDisplay = questionArr[qIndex].question;
        questionDiv.textContent = questionDisplay;
        
        var answers = questionArr[qIndex].answers;
        for (let i = 0; i < answers.length; i++) {
            const eachAnswer = questionArr[qIndex].answers[i];
            var answer = document.createElement("button")
            answer.className +='answer';
            answer.onclick = function(event) {
                event.target.textContent
                console.log(event.target.textContent)
                checkAnswer(eachAnswer)
                console.log(qIndex)
            }
            answer.innerHTML = (eachAnswer)
            answerDiv.appendChild(answer);
            document.getElementById("answers").appendChild(answer);
            } 
        }
}
function checkAnswer (answer_selected){
    if (answer_selected === questionArr[qIndex].correctAnswer){
        score++
        qIndex++
        askQuestion()
        console.log(score)
    }
    else {
        qIndex++
        askQuestion()
    }
}

 function endGame () {
     clearInterval(timerId)
     scoreDiv.innerText = score

 }
