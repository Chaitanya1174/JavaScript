let randomNum= parseInt(Math.random()*100+1);

const submit = document.querySelector('#submit');
const userNum = document.querySelector('#userNum');
const attempts = document.querySelector('.attempts');
const prevGuess = document.querySelector('.prevGuess');
let startOver = document.querySelector('.resultPara')
const p = document.createElement('p');

let prevGuessArray = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(userNum.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }else if (guess < 1 ){
        alert('Please enter a number >1')
    }else if (guess > 100 ){
        alert('Please enter a number <100')
    }else {
        prevGuessArray.push(guess)
        if(numGuess=== 11){
            displayGuess(guess)
            displayMess(`Game Over. Random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMess(`You guessed it right`)
        endGame()
    }else if(guess < randomNum){
        displayMess(`number is low`)
    }else (guess > randomNum)
        displayMess(`number is high`)
}

function displayGuess(guess) {
    userNum.value = ''
    attempts.innerHTML += `${guess}, `
    numGuess++;
    prevGuess.innerHTML = `${11- numGuess}`
}

function displayMess(message) {
    document.querySelector('.lowOrHigh').innerHTML=`<h2>${message}</h2>`;
}

function endGame() {
    userNum.value = ''
    userNum.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML =  `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click',function (e) {
    randomNum= parseInt(Math.random()*100+1);
    prevGuessArray= []
    numGuess= 1
    prevGuess.innerHTML= ''
    prevGuess.innerHTML = `${11- numGuess}`    
    userNum.removeAttribute('disabled','')
    startOver.removeChild(p)
    playGame = true
   })
}