/**
 * @jest-environment jsdom
 */

const {} = require('../js/app.js');
const { jsonData } = require('../json/quiz-data.js');

beforeEach(() => {
  let fs = require('fs');
  let fileContents = fs.readFileSync('./quiz.html', 'utf-8');
  document.open();
  document.write(fileContents);
  document.close();
});
