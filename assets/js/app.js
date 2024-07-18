import jsonData from './../json/quiz-data.js';

var quizContent = jsonData;
var currentQuestion = 0;
var correctAnswers = 0;

function showQuestion(quizContent, currentQuestion) {
  updateQuestion(quizContent[currentQuestion].prompt);
  updateAnswers(quizContent[currentQuestion].choices);
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
  currentQuestion++;
  setTimeout(() => {
    if (currentQuestion < quizContent.length) {
      showQuestion(quizContent, currentQuestion);
    } else {
      const quizContainer = document.querySelector('.quiz-container');
      quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
    }
  }, 2000);
}

function updateQuestion(quizContentQuestion) {
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
