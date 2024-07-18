/**
 * Parse the HTML Dom elements to be manipulated and assign them to variables
 */
const question = document.getElementById('question');
const answerOptions = document.getElementById('answers');

/**
 *@param {string} Url - The location of the JSON Data to fetch
 *This function fetches the JSON data from the URL provided and initializes the quiz
 */
async function fetchDataAndRender(url) {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    initQuiz(jsonData);
  } catch (err) {
    // If an error occurs we log it to the console
    console.error('Failed to fetch and render data', err);
  }
}

// Call the fetchDataAndRender function with the URL of the JSON data
fetchDataAndRender('assets/json/quiz-data.json');

/**
 * @param {Object} The returned JSON data from the fetchDataAndRender function
 * This function initializes the quiz by setting the first question and its answers
 */
function initQuiz(jsonData) {
  let currQuestion = 0;

  question.innerHTML = jsonData[currQuestion].prompt;

  jsonData[0].choices.forEach((answer) => {
    let answerOption = document.createElement('li');
    answerOption.innerHTML = answer.content;
    answerOption.setAttribute('data-id', answer.id);
    answerOptions.appendChild(answerOption);
  });
}
