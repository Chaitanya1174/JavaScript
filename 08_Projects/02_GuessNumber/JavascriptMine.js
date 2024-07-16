let randomNum= parseInt(Math.random()*100+1)
console.log(randomNum,'1st no.')

const userNum = document.querySelector('#userNum')
const submit = document.querySelector('#submit')
let attemptLeft = document.querySelector('.attempts')
let btn = document.querySelector('.btn')
let prevGuess = document.querySelector('.prevGuess')

let totalAtt = 10
attemptLeft.innerHTML=totalAtt
btn.innerHTML = "Submit"
let guessArray = []

let playGame= true;

if (playGame) {
    submit.addEventListener('click',function (e) {
        e.preventDefault()
        const guess = userNum.value
        checkGuess(guess)
    })
}

function checkGuess(guess) {
    // prevGuess.innerHTML += `${guess}, `
    if (totalAtt == 0) {
        console.log('no more attempts left')
        // playGame= false
        endGame()
    } else{
        if(guess == randomNum){
            console.log('you won..!');
            // playGame= false
            prevGuess.innerHTML += `${guess}, `
            endGame()
        }else{
            totalAtt= totalAtt-1
            attemptLeft.innerHTML=totalAtt
            prevGuess.innerHTML += `${guess}, `

        }
    }
 }
 function endGame() {
    // submit.disabled = true;
    userNum.setAttribute('disabled','')
    submit.setAttribute('disabled','');
    submit.setAttribute('value','GameOver');
    playGame = false;
    newGame();
}
function newGame(){
    // const newGameButton = document.querySelector('#title')
    attemptLeft.addEventListener('click',function (e) {
        randomNum = parseInt(Math.random()*100+1)
        console.log(randomNum,'2nd no.')
        totalAtt = 10
        prevGuess.innerHTML = ''
        guessArray = []
        userNum.removeAttribute('disabled','')
        submit.removeAttribute('disabled','')
        submit.setAttribute('value','Submit')
        playGame = true;
    })
}