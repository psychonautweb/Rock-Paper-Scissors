let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultPar = document.querySelector('.result > p');

const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'rock') return 'Rock';
    if(letter === 'paper') return 'Paper';
    return 'Scissors';
}

function win(user, computer) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    userChoiceDiv = document.getElementById(user);

    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    resultPar.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord} . You win.`;

    userChoiceDiv.classList.add('green-glow');
    setTimeout( () => { 
        userChoiceDiv.classList.remove('green-glow') }, 700);
}

function lose (user, computer) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    userChoiceDiv = document.getElementById(user);

    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    resultPar.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord} . You lost.`;

    userChoiceDiv.classList.add('red-glow');
    setTimeout( () => { 
        userChoiceDiv.classList.remove('red-glow') }, 700);
}

function draw (user, computer) {
    userChoiceDiv = document.getElementById(user);

    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    resultPar.innerHTML = `${convertToWord(user)}${smallUserWord} is same as ${convertToWord(computer)}${smallCompWord} . Draw.`;

    userChoiceDiv.classList.add('gray-glow');
    setTimeout( () => { 
        userChoiceDiv.classList.remove('gray-glow') }, 700);

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rockDiv.addEventListener('click', () => {
        game('rock');
    })
    paperDiv.addEventListener('click', () => {
        game('paper');
    })
    scissorsDiv.addEventListener('click', () => {
        game('scissors');
    })
}

main();