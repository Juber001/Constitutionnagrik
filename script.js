const questions = [
    {
        question: 'Who is known as the "Father of the Indian Constitution"?',
        answers: [
            { text: "Jawaharlal Nehru", correct: "false" },
            { text: "B. R. Ambedkar", correct: "true" },
            { text: "Mahatma Gandhi", correct: "false" },
            { text: "Sardar Vallabhbhai Patel", correct: "false" },
        ]
    },
    {
        question: 'In which year was the Constitution of India adopted?',
        answers: [
            { text: "1947", correct: "false" },
            { text: "1949", correct: "true" },
            { text: "1930", correct: "false" },
            { text: "1955", correct: "false" },
        ]
    },
    {
        question: 'The Constitution of India came into force on which date?',
        answers: [
            { text: "26th January 1947", correct: "false" },
            { text: "26th January 1950", correct: "false" },
            { text: "15th August 1949", correct: "false" },
            { text: "26th January 1950", correct: "True" },
        ]
    }
];

const questionelement = document.querySelector("#question");
const btn = document.querySelector(".answer");
const nextbtn = document.querySelector(".next");

let currentquestionindex = 0;
let score = 0;



function startquestion() {
    reset();
    let currentquestion = questions[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionelement.innerHTML = questionno + ". " + currentquestion.question;

    currentquestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        btn.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectanser);

    });
}
function startquiz() {
    currentquestionindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    startquestion();
}
function reset() {
    nextbtn.style.display = "none";
    while (btn.firstChild) {
        btn.removeChild(btn.firstChild);

    }
}
function selectanser(e) {
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct === "true";
    if (iscorrect) {
        selectbtn.classList.add("correct");
        score++;
    }
    else {
        selectbtn.classList.add("incorrect");
    }
    Array.from(btn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled="true";
    })
    nextbtn.style.display="block";
}

nextbtn.addEventListener("click",()=>{
    if(currentquestionindex<questions.length){
        handle();
    }
    else{
        startquiz();
    }
})

function handle(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        startquestion();

    }
    else{
        showscore();
    }
}

function showscore(){
    reset();
    questionelement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML="Play again";
    nextbtn.style.display="block";
}
startquiz();