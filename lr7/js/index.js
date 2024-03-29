// случайное число
let randomNumber = randomNumberGenerator();
// переменные которые выводим
let lastUserNumber = document.querySelector('.lastUserNumber');
let lowOrHi = document.querySelector('.lowOrHigh');
let guessNumber = document.querySelector('.guessNumber');
// кнопка и инпут в форме
let guessField = document.querySelector('.guessField');
let guessSubmit = document.getElementById('guessSubmit');

// для работы функций
let userNumber
let guessCount = 1;

function checkGuess(event) {
    event.preventDefault();
    userNumber = +guessField.value


    if ((userNumber !== randomNumber) && (+guessCount < 5)){
        guessCount+=1

        lowOrHi.textContent = (userNumber > randomNumber) ? 
            'Попробуй меньше' :
            'Попробуй больше'

        lastUserNumber.textContent = userNumber

        guessNumber.textContent = guessCount
        
    } else {
        gameOver(userNumber)
    }
    guessField.value = "";

}

function gameOver(userNumber) {
    guessField.disabled = true;

    lowOrHi.textContent = (userNumber === randomNumber) ? 'Ура победа' : 'эх поражение'
    lastUserNumber.textContent = userNumber
    guessNumber.textContent = guessCount
    guessSubmit.textContent  = 'Начать игру сначала'
    guessSubmit.removeEventListener("click", checkGuess)
    guessSubmit.addEventListener("click", startAgain)
}

function startAgain(event) {
    event.preventDefault();

    guessField.disabled = false;
    guessSubmit.textContent  = 'Испытать удачу'
    randomNumber = randomNumberGenerator()
    guessSubmit.removeEventListener("click", startAgain)
    guessSubmit.addEventListener("click", checkGuess);
    lowOrHi.textContent = ''
    lastUserNumber.textContent = ''
    guessNumber.textContent = ''
    guessCount = 0
}




function randomNumberGenerator() {
    return Math.floor(Math.random() * 10) +1;
}


guessSubmit.addEventListener("click", checkGuess);
