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
      showFinalScore(correctAnswers);
    }
  }, 1500);
  // Add second delay after new question is loaded to avoid clicking
  // the same answer twice and scoring twice.
  setTimeout(() => {}, 500);
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
    li.addEventListener(
      'click',
      (e) => {
        checkAnswer(e.target.getAttribute('data-choiceID'));
      },
      { once: true }
    ); // {once: true} makes the event happen only once.
    choices.appendChild(li);
  });
}

function showFinalScore(correctAnswers) {
  const finalScore = document.getElementById('finalScore');
  const finalScoreDisplay = document.getElementById('final-score-display');
  const scoreCounter = document.getElementById('score-counter');
  scoreCounter.style.display = 'none';
  finalScoreDisplay.style.display = 'block';
  finalScore.innerHTML = correctAnswers;
  // Check if the current score is higher than the high score and if current score is greater, update the highscore
  let currHighScore = localStorage.getItem('highScore');
  const bestHighScore = document.getElementById('best-highscore');

  if (currHighScore && currHighScore < correctAnswers) {
    currHighScore = correctAnswers;
    bestHighScore.innerHTML = currHighScore;
  } else if (!currHighScore) {
    localStorage.setItem('highScore', correctAnswers);
    bestHighScore.innerHTML = correctAnswers;
  } else {
    bestHighScore.innerHTML = currHighScore;
  }
}

showQuestion(quizContent, currentQuestion);
