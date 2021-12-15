function computerPlay() {
    const gameElements = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random()* gameElements.length)
    return(random, gameElements[random]);
}
computerPlay()
console.log(computerPlay());

function playSingleRound(playerSelection, computerSelection) {
    let result = prompt('Please make your choice', '')
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return 
    }
    
    return result
}
const playerSelection = 'Rock';
const computerSelection = 'computerPlay()';
console.log(playSingleRound(playerSelection, computerSelection));