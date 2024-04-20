let randomNum= parseInt(Math.random()*100+1)
console.log(randomNum)
const userNum = document.querySelector('#userNum')
const submit = document.querySelector('#submit')
let attemptLeft = document.querySelector('.attempts')
let prevGuess = document.querySelector('.prevGuess')

let totalAtt = 10
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
    prevGuess.innerHTML += `${guess}, `
    if (totalAtt == 0) {
        console.log('no more attempts left')
        playGame= false
    } else{
        if(guess == randomNum){
            console.log('you won..!');
            playGame= false
        }else{
            totalAtt= totalAtt-1
        }
    }
 }