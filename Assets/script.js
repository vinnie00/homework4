let questionArr = [
    {
        question: "What do you use to send a message to a user",
        answers: ["alert()", "notify()", "console.log()", "message()"],
        correctAnswer: "answer1"
    },
    {
        question: "Who made the Javascript language",
        answers: ["Java", "Google", "Netscape", "Nexus"],
        correctAnswer: "answer3"
    },
    {
        question: "Which symbol is used single line comments in Javascript?",
        answers: ["/* */", "//", "Comment", "<!-- -->"],
        correctAnswer: "answer2"
    },
    {
        question: "Which is not a Javascript data type",
        answers: ["Number", "String", "Boolean", "Data"],
        correctAnswer: "answer4"
    },
    {
        question: "Question 5",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: "answer1"
    }
]
var startButton = document.getElementById("start-button")
var nextButton = document.getElementById("")
var questionDiv = document.getElementById("question")
var answerDiv = document.getElementById("answers")
var resultDiv = document.getElementById("result")
var counterDiv = document.getElementById("question-counter")
var quizDiv = document.getElementById("")
var timeDiv = document.getElementById("time-counter")
var scoreDiv = document.getElementById("score-counter")
var qIndex = 0;
var score = 0;
var time = 0;
scoreDiv.innerHTML = score
// var questionDiv = document.getElementById("question")
// var answerDiv = document.getElementById("answers")
// var resultDiv = document.getElementById("result")
// var counterDiv = document.getElementById("question-counter")
// var timeDiv = document.getElementById("time-score-counter")
// let timer = 60;
// let qIndex = 0;
// function getScores
    // when page loads, get high scores from local storage
    // append data to high scores div
function getScores() {
}
// function startGame
    // fires when user clicks start button
    // initializes the game
    // calls startTimer
    // calls askQuestion
startButton.addEventListener("click", startGame)
function startGame() {
    askQuestion()
}
// function startTimer
    // begins timer countdown from 60 seconds
    // appends timer to page for all questions
    // checks for game-end conditions
function startTimer() {
    var x = setInterval(function () {
        timer--;
        // inside if statement we must account for all game-end conditions
        // if all questions have been answered
        if (timer < 0) {
            clearInterval(x);
        }
    }, 1000);
}
// function askQuestion
    // check to see if current question index exists
    // if it exists, move on
    // if it does not exist, return
    // create element for question
    // append question text to element
    // append elements to quiz div (in html)
    // loop through answers array
    // create element for each answer
    // append each answer to answers div
function askQuestion() {
    if (qIndex>4) {
        endGame()
    } else {
        //clear();
        var questionDisplay = document.createElement("h4");
        questionDisplay.textContent = questionArr[qIndex].question;
        questionDiv.appendChild(questionDisplay);
        
        var answers = questionArr[qIndex].answers;
        for (let i = 0; i < answers.length; i++) {
            const eachAnswer = questionArr[qIndex].answers[i];
            var answer = document.createElement("button")
            answer.className +='answer';
            //answer.onclick = "'checkAnswer(\"" + eachAnswer + "\")'";
            answer.onclick = function() {
                
                checkAnswer(eachAnswer)
                console.log(qIndex)
            }
            answer.innerHTML = (eachAnswer)
            answerDiv.appendChild(answer);
            document.getElementById("answers").appendChild(answer);
            }
            // function clear(){  
            //     //e.firstElementChild can be used  
            //     questionDiv.removeChild(questionDisplay);
            //     answerDiv.removeChild(answers);
        
            // } 
            
        }
}
function checkAnswer (answer_selected){
    if (answer_selected == questionArr[qIndex].correctAnswer){
        console.log('test')
        score+=1
        qIndex++
        askQuestion()
        console.log(score)
    }
    else {
        console.log('failed')
        time -= 10;
        qIndex++
        askQuestion()
    }
}


    // fires when an answer is clicked
    // captures value of clicked answer
    // compare to correct/actual answer
    // if correct, increments score
    // if incorrect, penalize time or decrements score
    // increment question index 
    // calls askQuestion
// function checkAnswer(eachAnswer) {
//     console.log('test')
//     if (userAnswer == questionArr[qIndex].correctAnswer){
//        score++
//        qIndex++
//         askQuestion()
//     }
//     else{
//         time (-10)
//         qIndex++
//         askQuestion()
//     }
// }
 function endGame () {
     alert(`Congrats! Your score is ${score} out of 5`)

 }
//     show highscores div
//     display final score to user
//     ask for user input (name or initials)
// function endGame() {
//     display score
// }
 //function saveScore ()
//     capture user name or initials
//      capture user end score
//     save score to local storage
//     local storage should be an array of objects (similar to questionsArr)
// function saveScore() {
// }