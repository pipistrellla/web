let randomNumber = Math.floor(Math.random() * 10) + 1;

let userNumber = document.querySelector('.userNumber');
let lastUserNumber = document.querySelector('.lastUserNumber');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;