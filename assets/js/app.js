import jsonData from './../json/quiz-data.js';

// Vars for global scope as the data is passed around between a lot of functions
var quizContent = jsonData;
var correctAnswers = 0;
var questionsList = [];
var randomQuestion;
// Create a list of questions to be asked in random order and then remove them from the list as they are asked to avoid duplicates
while (questionsList.length < quizContent.length) {
  questionsList.push(quizContent[questionsList.length].id);
}

/**
 * Function to show the question and answers
 * @param {Array} quizContent - Array of objects containing the quiz data
 */
function showQuestion() {
  // Get the feedback text element and clear it
  const feedbackText = document.getElementById('feedback-text');
  feedbackText.textContent = '';
  // Generate random number
  randomQuestion = Math.floor(Math.random() * questionsList.length);
  // Remove that value from questionList
  questionsList = questionsList.filter(
    (question) => question !== questionsList[randomQuestion]
  );
  /**
   * Update the question and answers on the page
   * @param {String} quizContent[randomQuestion].prompt - The question to be asked
   */
  updateQuestion(
    quizContent[randomQuestion].prompt,
    quizContent[randomQuestion].img ? quizContent[randomQuestion].img : null
  );
  /**
   * Update the answers on the page
   * @param {Array} quizContent[randomQuestion].choices - The answers to the question
   */
  updateAnswers(quizContent[randomQuestion].choices);
}

/**
 *
 * @param {*} selected - The answer that the user selected
 */
function checkAnswer(selected) {
  const feedbackText = document.getElementById('feedback-text');
  if (selected === jsonData[randomQuestion].answer) {
    feedbackText.textContent = 'Correct!';
    // Update the score
    const score = document.getElementById('score');
    correctAnswers++;
    score.innerHTML = correctAnswers;
  } else {
    feedbackText.textContent = `Incorrect! The correct answer was ${jsonData[randomQuestion].answer}`;
  }
  // Update the current question after a delay
  setTimeout(() => {
    console.log('Current length of list:');
    console.log(questionsList.length);
    // Check if there are any questions left in the list
    if (questionsList.length > 0) {
      // Update the current question
      showQuestion();
    } else {
      // Show the final score
      showFinalScore(correctAnswers);
    }
  }, 1500);
  // Add second delay after new question is loaded to avoid clicking
  // the same answer twice and scoring twice.
  setTimeout(() => {}, 500);
}

/**
 * @param {*} quizContentQuestion - The question to be asked
 * @param {*} imgSrc - The image source for the question if there is one
 */
function updateQuestion(quizContentQuestion, imgSrc) {
  const questionIMG = document.getElementById('questionImage');
  // Check if there is an image source and if there is, display it
  if (imgSrc) {
    questionIMG.src = 'imgSrc';
    questionIMG.style.display = 'block';
  }
  // Update the question text
  const questionText = document.getElementById('question');
  questionText.textContent = quizContentQuestion;
}

/**
 * @param {*} quizContentAnswers
 */
function updateAnswers(quizContentAnswers) {
  const choices = document.getElementById('choices');
  choices.innerHTML = '';
  // Loop through the answers and add them to the page
  quizContentAnswers.forEach((choice, index) => {
    const li = document.createElement('li');
    li.textContent = choice.content;
    li.setAttribute('data-id', index);
    li.setAttribute('data-choiceID', choice.id);
    // Add an event listener to check the answer when the user clicks on an answer
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

/**
 *
 * @param {*} correctAnswers - The number of correct answers
 */
function showFinalScore(correctAnswers) {
  const finalScore = document.getElementById('finalScore');
  const finalScoreDisplay = document.getElementById('final-score-display');
  const scoreCounter = document.getElementById('score-counter');
  const quizContainer = document.getElementById('quiz');
  const feedbackText = document.getElementById('feedback-text');
  feedbackText.textContent = '';
  quizContainer.classList.remove('d-flex');
  quizContainer.style.display = 'none';
  scoreCounter.style.display = 'none';
  finalScoreDisplay.style.display = 'block';
  finalScore.innerHTML = correctAnswers;
  // Check if the current score is higher than the high score and if current score is greater, update the highscore
  let currHighScore = localStorage.getItem('highScore');
  const bestHighScore = document.getElementById('best-highscore');

  // Check if there is a high score and if the current score is higher than the high score
  if (currHighScore && currHighScore < correctAnswers) {
    currHighScore = correctAnswers;
    bestHighScore.innerHTML = currHighScore;
  } else if (!currHighScore) {
    // Update the high score in local storage
    localStorage.setItem('highScore', correctAnswers);
    bestHighScore.innerHTML = correctAnswers;
  } else {
    // Update the high score on the page
    bestHighScore.innerHTML = currHighScore;
  }
  let scorePercent = (correctAnswers / quizContent.length) * 100;
  let moveamount = -180 + scorePercent * 1.8;
  const rainbowOverlay = document.getElementById('rainbow-overlay');

  setTimeout(() => {
    rainbowOverlay.style.transform = `rotate(${moveamount}deg)`;
  }, 3000);
}

showQuestion();
