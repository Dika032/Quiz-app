const { text } = require("express");

const questions = [
    {
        questions: "Which of these is a type of database", 
        answers: [
            { text: "Mongo DB", correct: false},
            { text: "SQL", correct: false},
            { text: "Inmemory", correct: true},
            {text: "Cached", correct: false}
        ]
    },
    {
        questions: "Which is the greatest school to you", 
        answers: [
            { text: "Life", correct: true},
            { text: "Youtube", correct: false},
            { text: "Social-Media", correct: false},
            {text: "Parents", correct: false}
        ]
    },
    {
        questions: "In backend terms, what is a client known as?", 
        answers: [
            { text: "User", correct: false},
            { text: "Customer", correct: false},
            { text: "Frontend", correct: true},
            {text: "Middleware", correct: false},
        ]
    },
    {
        questions: "Which is a database operation", 
        answers: [
            { text: "Login", correct: false},
            { text: "Update", correct: true},
            { text: "Request", correct: false},
            {text: "import", correct: false},
        ]
    }
   
];

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

letcurrentQuestionindex = 0;
let score = 0

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){ 
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text; 
        button.classList.add(btn);
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.addcorrect
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.fisrtChild){
        answerButtons.removeChild(answerButtons.fisrtChild)
    }
}
 
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; 
      }else{
        selectedBtn.classList.add("incorrect");
      }
      Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
       button.disabled = true;
      });
      nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions. length}!`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block" 
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
       showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();