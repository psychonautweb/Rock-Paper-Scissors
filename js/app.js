// Variables

let playerScoreCount = 0;
let computerScoreCount = 0;
let gameRoundWinner = '';

const roundWinnerMessageElement = document.getElementById('round-winner-message');

const playerOneWinCount = document.getElementById('player1-win-count');
const playerTwoWinCount = document.getElementById('player2-win-count');

let playerOnePokeChoiceElement = document.getElementById('player-one');
let playerTwoPokeChoiceElement = document.getElementById('player-two');

const rockButtonElement = document.getElementById('rock');
const paperButtonElement = document.getElementById('paper');
const scissorsButtoneElement = document.getElementById('scissors');

// const gameOverMessageElement; //
// const restartGameElement;

// Event Listeners

rockButtonElement.addEventListener('click', makeSelection);
paperButtonElement.addEventListener('click', makeSelection);
scissorsButtoneElement.addEventListener('click', makeSelection);

function makeSelection(event) {
    selectedElement = event.target.cloneNode(true); 
    playerOnePokeChoiceElement.replaceChildren(selectedElement);

    const computerSelection = getComputerChoice();
}

// Game Logic












// Graphical User Interface Logic


