/**
 * simulates the computer player by returning a
 * random choice between "rock", "paper" and "scissors".
 * 
 * @returns {string} - pseudorandom string; "rock", "paper" or "scissors".
 */

function getComputerChoice() {

    // initialize array of choices
    choices = ["rock", "paper", "scissors"];

    // pick random choice
    choice = choices[Math.floor(Math.random() * choices.length)];

    // return choice
    return choice;
}


/**
 * simulates a single round of rock paper scissors.
 * 
 * @param {string} playerSelection - the player's choice string; "rock", "paper" or "scissors".
 * @param {string} computerSelection - the computer's random choice string; "rock", "paper" or "scissors".
 * @returns {string} - a message string declaring the winner.
 */

function playRound(playerSelection, computerSelection) {

    // initialize object of result combinations
    const combinations = {
        "rock": {
            winTo: "scissors",
            loseTo: "paper"
        },
        "paper": {
            winTo: "rock",
            loseTo: "scissors"
        },
        "scissors": {
            winTo: "paper",
            loseTo: "rock"
        }
    }

    // set player and computer selections to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // determine if tie
    if (playerSelection === computerSelection) {
        return "Tie!"
    }

    // otherwise, determine if player won
    else if (combinations[playerSelection].winTo === computerSelection) {
        return `You Win! ${playerSelection} beats ${computerSelection}`; 
    }

    // otherwise, determine if player lost
    else if (combinations[playerSelection].loseTo === computerSelection) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}


document.addEventListener("DOMContentLoaded", (event) => {

    console.log(getComputerChoice());

})