let randomnum = parseInt(Math.random() * 100 + 1);
console.log(randomnum);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const numguess = document.querySelector('.guesses');
let guessremain = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevguess = [];
let totalguess = 0;

let playGame = true;
 if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number greater than 1');
  } else if (guess > 100) {
    alert('please enter numbers less than 100');
  } else {
    prevguess.push(guess);
    if (totalguess === 11) {
      displayGuess(guess);
      displayMessage(`game over. random number was ${randomnum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}


function checkGuess(guess) {
    if (guess === randomnum) {
      displayMessage(`You guessed it right`);
      endGame();
    } else if (guess < randomnum) {
      displayMessage(`Number is TOO low`);
    } else if (guess > randomnum) {
      displayMessage(`Number is TOO high`);
    }
  }
  function displayGuess(guess) {
    userInput.value = '';
    numguess.innerHTML += `${guess}, `;
    totalguess++;
    guessremain.innerHTML = `${10 - totalguess}`;
  }
  
  function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }
  
  function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }
  
  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomnum = parseInt(Math.random() * 100 + 1);
      prevguess= [];
      totalguess = 1;
      numguess.innerHTML = '';
    guessremain.innerHTML = `${11 - totalguess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }
  