let jsonData = [];

fetch('assets/json/quiz-data.json')
  .then((res) => res.json())
  .then((data) => {
    jsonData = data;
  })
  .catch((err) => console.log(err));

console.log(jsonData);
