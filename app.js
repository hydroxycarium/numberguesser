let min = 1,
    max = 10,
    winningNumber = getRandomNum(min, max),
    guessesLeft = 3;

console.log(winningNumber);

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        return false;
    }

    if (guess === winningNumber) {
        gameOver(true, `Winning number is ${winningNumber}`);
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            gameOver(false, `You lost, the winning number was ${winningNumber}`);
        } else {
            setMessage(`Try again, ${guessesLeft} more guesses`, 'orange')
        }
    }

    console.log(guess);
});

function gameOver(state, msg) {
    let color;
    state === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
