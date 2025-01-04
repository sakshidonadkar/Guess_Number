let randomNumber = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector('#subt');
let userinput = document.querySelector('#guessField');
let guessSlot =  document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let loworHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector(".result");

let p =  document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        let guess = parseInt(userinput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if (isNaN(guess)){
       alert('Please enter a valid number.')
    } else if(guess < 1){
        alert('Please enter a number greater than zero.')
    } else if(guess > 100 ){
        alert('Please enter a number less than 100.')
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
          displayGuess(guess);
          displayMessage(`Game Over. Random number was 
           ${randomNumber}`);
          endGame();
        } else {
          displayGuess(guess);
          checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess == randomNumber){
        displayMessage('Congratulations! You Guess it right');
        endGame();
    } else if (guess < randomNumber){
        displayMessage('Your guess is too low. Try again.');
    } else if (guess > randomNumber) {
        displayMessage('Your guess is too high. Try Again.');
    }
}

function displayGuess (guess){
      userinput.value =  '';
      guessSlot.innerHTML += `${guess},  `;
      numGuess++;
      remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
      loworHi.innerHTML = `${message}`;
}

function endGame(){
    userinput.value = '';
    userinput.setAttribute("disabled", "");
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    p.style.cursor = 'pointer';
    p.style.backgroundColor = '#fff';
    p.style.color='#000';
    p.style.padding  = '.5em .7em';
    p.style.borderRadius= '.3em' ;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
  

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userinput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }