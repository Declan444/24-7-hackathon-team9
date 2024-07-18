import jsonData from './../json/quiz-data.js';

// Vars for global scope as the data is passed around between a lot of functions
var quizContent = jsonData;
var currentQuestion = 0;
var correctAnswers = 0;
var questionsList = [];
while (questionsList.length < quizContent.length) {
  questionsList.push(quizContent[questionsList.length].id);
}

console.log(questionsList);

function showQuestion() {
  // Generate random number
  const randomQuestion = Math.floor(Math.random() * questionsList.length);
  // Remove that value from questionList
  questionsList = questionsList.filter(
    (question) => question !== questionsList[randomQuestion]
  );
  updateQuestion(
    quizContent[randomQuestion].prompt,
    quizContent[randomQuestion].img ? quizContent[randomQuestion].img : null
  );
  updateAnswers(quizContent[randomQuestion].choices);
}

function checkAnswer(selected) {
  if (selected === jsonData[currentQuestion].answer) {
    console.log('correct');
    const score = document.getElementById('score');
    correctAnswers++;
    score.innerHTML = correctAnswers;
  } else {
    console.log('incorrect');
  }
  setTimeout(() => {
    console.log('Current length of list:');
    console.log(questionsList.length);
    if (questionsList.length > 0) {
      showQuestion();
    } else {
      console.log('Game Over');
    }
  }, 2000);
}

function updateQuestion(quizContentQuestion, imgSrc) {
  const questionIMG = document.getElementById('questionImage');
  if (imgSrc) {
    questionIMG.src = 'imgSrc';
    questionIMG.style.display = 'block';
  }
  const questionText = document.getElementById('question');
  questionText.textContent = quizContentQuestion;
}

function updateAnswers(quizContentAnswers) {
  const choices = document.getElementById('choices');
  choices.innerHTML = '';
  quizContentAnswers.forEach((choice, index) => {
    const li = document.createElement('li');
    li.textContent = choice.content;
    li.setAttribute('data-id', index);
    li.setAttribute('data-choiceID', choice.id);
    li.addEventListener('click', (e) => {
      checkAnswer(e.target.getAttribute('data-choiceID'));
    });
    choices.appendChild(li);
  });
}

showQuestion(quizContent, currentQuestion);
