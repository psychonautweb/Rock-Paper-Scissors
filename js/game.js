// Game Logic

let computerPlayChoice = function computerPlay() {         // this function randomly chooses one string for PC
    const gameElements = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()* gameElements.length)
    return (random, gameElements[random]);
}

function playSingleRound(playerSelection, computerSelection) {   // this function plays one round of game and returns a result in form of a string 
    
    if ((playerSelection === 'rock' && computerSelection === 'paper')||(playerSelection === 'paper' && computerSelection === 'scissors')||(playerSelection === 'scissors' && computerSelection === 'rock')) {
        return 'You lost. Go delete your existence';
    } else if ((playerSelection === 'paper' && computerSelection === 'rock')||(playerSelection === 'rock' && computerSelection === 'scissors')||(playerSelection === 'scissors' && computerSelection === 'paper')) { 
        return  'You won, dude you are awesome';
    } else if (playerSelection === computerSelection) {
        return 'it\'s a tie!';
    }
    
}

// Variables and Event Listeners

const rockButtonElement = document.getElementById('rock');
const paperButtonElement = document.getElementById('paper');
const scissorsButtoneElement = document.getElementById('scissors');

let playerOnePokeChoiceElement = document.getElementById('player-one');
let playerTwoPokeChoiceElement = document.getElementById('player-two');


rockButtonElement.addEventListener('click', updateSelectedChoices);
paperButtonElement.addEventListener('click', updateSelectedChoices);
scissorsButtoneElement.addEventListener('click', updateSelectedChoices);


function updateSelectedChoices (event) {
    selectedElement = event.target.cloneNode(true);  // clones the node to var
    playerOnePokeChoiceElement.replaceChildren(selectedElement); // replaces the clildren with selected element
}

function updateAiChoice () {
    if (computerPlayChoice === 'rock') {
        playerTwoPokeChoiceElement.replaceChildren(rockButtonElement);
    } else if (computerPlayChoice === 'paper') {
        playerTwoPokeChoiceElement.replaceChildren(paperButtonElement);
    } else if (computerPlayChoice === 'scissors') {
        playerTwoPokeChoiceElement.replaceChildren(scissorsButtoneElement);
    }
}



// const playerInputSelection = prompt('Please make your choice between rock, paper and scissors', '');

// this makes everything that user inputs to lower case and stores it in playerSelection varibale
// const playerSelection = playerInputSelection.toLowerCase(); 

// this stores computer random choice to variable
// const computerSelection = computerPlay(); 

// console.log("Player selected: " + playerSelection);
// console.log("Computer selected: " + computerSelection);
// console.log(playSingleRound(playerSelection, computerSelection));


// function that plays 5 round game that keeps score and reports winner or loser at the end

function game() {
    for (let i = 0; i < 5; i++) {
    const playerInputSelection = prompt('Please make your choice between rock, paper and scissors', '');
    const playerSelection = playerInputSelection.toLowerCase();    
    const computerSelection = computerPlayChoice; 
    playSingleRound(playerSelection, computerSelection);
    alert('You selected: ' + playerSelection);
    alert('Computer selected: ' + computerSelection);
    alert(playSingleRound(playerSelection, computerSelection));
    }
}

game();