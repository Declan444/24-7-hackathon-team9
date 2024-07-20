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
export default jsonData;
