const jsonData = [
  {
    id: '0',
    prompt: 'The Stonewall Riots took place in June of what year?',
    choices: [
      { id: 'a', content: '1970' },
      { id: 'b', content: '1969' },
      { id: 'c', content: '1989' },
      { id: 'd', content: '2001' },
    ],
    answer: 'b',
  },
  {
    id: '1',
    prompt: "The United States' first Pride parade took place in what year?",
    choices: [
      { id: 'a', content: '1970' },
      { id: 'b', content: '1980' },
      { id: 'c', content: '1990' },
      { id: 'd', content: '2000' },
    ],
    answer: 'a',
  },
  {
    id: '2',
    prompt: 'When was the first protest for gay and lesbian rights?',
    choices: [
      { id: 'a', content: '1966' },
      { id: 'b', content: '1962' },
      { id: 'c', content: '1984' },
      { id: 'd', content: '1965' },
    ],
    answer: 'd',
  },
  {
    id: '3',
    img: 'assets/img/traditional-pride-flag.png',
    prompt: 'What year was the first Pride Flag designed?',
    choices: [
      { id: 'a', content: '1977' },
      { id: 'b', content: '1978' },
      { id: 'c', content: '1981' },
      { id: 'd', content: '1984' },
    ],
    answer: 'b',
  },
  {
    id: '4',
    img: 'assets/img/lesbian-pride-flag.png',
    prompt: 'What does this flag represent?',
    choices: [
      { id: 'a', content: 'Transexual Pride' },
      { id: 'b', content: 'A-Sexual Pride' },
      { id: 'c', content: 'Lesbian Pride' },
      { id: 'd', content: 'Bisexual Pride' },
    ],
    answer: 'c',
  },
  {
    id: '5',
    img: 'assets/img/intersex-pride-flag.png',
    prompt: 'What does this Circle on a flag represent?',
    choices: [
      { id: 'a', content: 'Intersex Pride' },
      { id: 'b', content: 'Pansexual Pride' },
      { id: 'c', content: 'Gender Fluid Pride' },
      { id: 'd', content: 'A-Sexual Pride' },
    ],
    answer: 'a',
  },
  {
    id: '6',
    img: 'assets/img/intersex-progress-flag.png',
    prompt:
      'This Pride Flag was first shown in 2021, designed by artist Valentino Vecchietti. What does the arrow on the left represent?',
    choices: [
      { id: 'a', content: 'Solidarity' },
      { id: 'b', content: 'Unity' },
      { id: 'c', content: 'Progress' },
      { id: 'd', content: 'Understanding' },
    ],
    answer: 'c',
  },
  {
    id: '7',
    img: 'assets/img/trans-pride-flag.png',
    prompt: 'Which pride flag is this?',
    choices: [
      { id: 'a', content: 'Transexual Pride' },
      { id: 'b', content: 'Lesbian Pride' },
      { id: 'c', content: 'Gender-queer Pride' },
      { id: 'd', content: 'A-Gender Pride' },
    ],
    answer: 'a',
  },
  {
    id: '8',
    img: 'assets/img/demisexual-pride-flag.png',
    prompt: "This is the Demisexual Pride Flag. What does 'Demisexual' mean?",
    choices: [
      { id: 'a', content: 'Attracted to people regardless of their gender' },
      { id: 'b', content: 'Low or no sexual attraction to others' },
      {
        id: 'c',
        content:
          'Forming sexual attraction only after establishing an emotional connection with someone',
      },
      {
        id: 'd',
        content: 'Feeling attraction to people of more than one gender',
      },
    ],
    answer: 'c',
  },
  {
    id: '9',
    img: 'assets/img/asexual-pride-flag.png',
    prompt: 'Which pride flag is this?',
    choices: [
      { id: 'a', content: 'A-Sexual Pride' },
      { id: 'b', content: 'Gender-Queer Pride' },
      { id: 'c', content: 'Bi-Sexual Pride' },
      { id: 'd', content: 'Pansexual Pride' },
    ],
    answer: 'a',
  },
  {
    id: '10',
    img: 'assets/img/pansexual-pride-flag.png',
    prompt:
      'This is the Pansexual Pride flag. Which of these is a popular saying in the Pansexual Community when talking about how they feel attraction for other people?',
    choices: [
      { id: 'a', content: "We're here, we're Queer. Get used to it!" },
      { id: 'b', content: 'Hearts, not Parts' },
      { id: 'c', content: 'Femmes can be Thems' },
      { id: 'd', content: 'The Heart wants what the Heart wants' },
    ],
    answer: 'b',
  },
  {
    id: '11',
    img: 'assets/img/agender-pride-flag.png',
    prompt: 'Which pride flag is this?',
    choices: [
      { id: 'a', content: 'Gender-Fluid Pride' },
      { id: 'b', content: 'A-Gender Pride' },
      { id: 'c', content: 'Gender-Queer Pride' },
      { id: 'd', content: 'Transexual Pride' },
    ],
    answer: 'b',
  },
  {
    id: '12',
    img: 'assets/img/genderfluid-pride-flag.png',
    prompt:
      'This is the Gender Fluid Pride Flag. But which of these novels with a Gender Fluid protagonist came out first?',
    choices: [
      { id: 'a', content: 'The Left Hand of Darkness by Ursula K Leguin' },
      { id: 'b', content: 'A Psalm for the Wild Built by Becky Chambers' },
      { id: 'c', content: 'Middlesex by Jeffrey Eugenides' },
      { id: 'd', content: 'Orlando: A biography by Virginia Woolf' },
    ],
    answer: 'd',
  },
  {
    id: '13',
    prompt:
      'Which was the first country in the world to legalize same-sex marriage?',
    choices: [
      { id: 'a', content: 'Japan' },
      { id: 'b', content: 'Belgium' },
      { id: 'c', content: 'Netherlands' },
      { id: 'd', content: 'United States of America' },
    ],
    answer: 'c',
  },
  {
    id: '14',
    prompt: "Where does the word 'Lesbian' come from?",
    choices: [
      { id: 'a', content: 'The Greek island of Lesbos' },
      { id: 'b', content: "The latin word for 'Sisters'" },
      { id: 'c', content: 'It was invented by Second Wave Feminists' },
      { id: 'd', content: 'The poet Oscar Wilde' },
    ],
    answer: 'a',
  },
  {
    id: '15',
    img: 'assets/img/bisexual-pride-flag.png',
    prompt: 'Which pride flag is this?',
    choices: [
      { id: 'a', content: 'A-Sexual Pride' },
      { id: 'b', content: 'Bi-Sexual Pride' },
      { id: 'c', content: 'Pansexual Pride' },
      { id: 'd', content: 'Lesbian Pride' },
    ],
    answer: 'b',
  },
  {
    id: '16',
    img: 'assets/img/genderqueer-pride-flag.png',
    prompt: 'Which pride flag is this?',
    choices: [
      { id: 'a', content: 'Intersex Pride' },
      { id: 'b', content: 'Bi-Sexual Pride' },
      { id: 'c', content: 'Genderqueer Pride' },
      { id: 'd', content: 'Demisexual Pride' },
    ],
    answer: 'c',
  },
  {
    id: '17',
    prompt:
      'Which of the following is the first-ever openly gay character in the Marvel comics universe?',
    choices: [
      { id: 'a', content: 'Jubilee' },
      { id: 'b', content: 'Maddame Web' },
      { id: 'c', content: 'Captain Marvel' },
      { id: 'd', content: 'North Star' },
    ],
    answer: 'd',
  },
  {
    id: '18',
    prompt:
      'São Paulo Gay Pride Parade was listed by Guinness World Records as the worlds largest Pride Parade in 2009. How many people attended that year?',
    choices: [
      { id: 'a', content: '2.5 million' },
      { id: 'b', content: '500,000' },
      { id: 'c', content: '1.2 million' },
      { id: 'd', content: '5 million' },
    ],
    answer: 'a',
  },
  {
    id: '19',
    prompt:
      "Which early computer scientist was charged with 'Gross Indecency' for being Homosexual?",
    choices: [
      { id: 'a', content: 'Charles Babbage' },
      { id: 'b', content: 'Tim Berners-Lee' },
      { id: 'c', content: 'Alan Turing' },
      { id: 'd', content: 'Katherine Johnson' },
    ],
    answer: 'c',
  },
];

// Vars for global scope as the data is passed around between a lot of functions
var quizContent = jsonData;
var correctAnswers = 0;
var questionsAsked = [];
var randomQuestion;
var questionNumber = 0;

/**
 * Function to show the question and answers
 * @param {Array} quizContent - Array of objects containing the quiz data
 */
function showQuestion() {
  const countdownBarLoader = document.getElementById('countdown-bar-fill');
  countdownBarLoader.style.width = '100%';
  questionNumber++;
  // Get the feedback text element and clear it
  const feedbackText = document.getElementById('feedback-text');
  feedbackText.textContent = '';
  // Generate random number
  randomQuestion = Math.floor(Math.random() * jsonData.length);
  // Check if this value is already in the questionsAsked array and if so get a new one
  while (questionsAsked.includes(randomQuestion)) {
    randomQuestion = Math.floor(Math.random() * jsonData.length);
  }
  // Add the ID of the current question to the questionsAsked array
  questionsAsked.push(randomQuestion);
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
    const correctAnswer = jsonData[randomQuestion].choices.find(
      (choice) => choice.id === jsonData[randomQuestion].answer
    );
    feedbackText.textContent = `Incorrect! The correct answer was ${jsonData[
      randomQuestion
    ].answer.toUpperCase()}: ${correctAnswer.content}`;
  }
  const countdownBarLoader = document.getElementById('countdown-bar-fill');
  countdownBarLoader.style.width = '0';
  // Update the current question after a delay
  setTimeout(() => {
    // Check if 10 questions have been asked
    if (questionNumber < 10) {
      // Update the current question
      showQuestion();
    } else {
      // Show the final score
      showFinalScore(correctAnswers);
    }
  }, 2000);
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
  // Hide the image if there is no image source
  questionIMG.style.display = 'none';
  // Check if there is an image source and if there is, display it
  if (imgSrc) {
    questionIMG.src = imgSrc;
    questionIMG.style.display = 'block';
  }
  // Update the question text
  const questionText = document.getElementById('question');
  questionText.textContent = `${questionNumber}: ${quizContentQuestion}`;
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
  let scorePercent = (correctAnswers / 10) * 100;
  let moveamount = -180 + scorePercent * 1.8;
  const rainbowOverlay = document.getElementById('rainbow-overlay');

  setTimeout(() => {
    rainbowOverlay.style.transform = `rotate(${moveamount}deg)`;
  }, 3000);
}

showQuestion();
