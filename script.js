/**
 * simulates the computer player by returning a
 * random choice between "Rock", "Paper" and "Scissors".
 * 
 * @returns {string} - pseudorandom string; "Rock", "Paper" or "Scissors".
 */

function getComputerChoice() {

    // initialize array of choices
    let choices = ["Rock", "Paper", "Scissors"];

    // pick random choice
    let choice = choices[Math.floor(Math.random() * choices.length)];

    // return choice
    return choice;
}


/**
 * simulates a single round of rock paper scissors.
 * 
 * @param {string} playerSelection - the player's choice string; rock / paper / scissors.
 * @param {string} computerSelection - the computer's random choice string; rock / paper / scissors".
 * @returns {string} - a message string declaring the winner.
 */

function playRound(playerSelection, computerSelection) {

    // initialize object of result combinations
    const combinations = {
        "Rock": {
            winTo: "Scissors",
            loseTo: "Paper"
        },
        "Paper": {
            winTo: "Rock",
            loseTo: "Scissors"
        },
        "Scissors": {
            winTo: "Paper",
            loseTo: "Rock"
        }
    }

    // set player and computer selections to capitalized
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

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


/**
 * capitalizes the first letter of a string.
 * 
 * @param {string} text - mixed-case input string.
 * @returns {string} - first letter capitalized string.
 */

function capitalize(text) {

    // slice and extract portions of the string for capitalization
    let capitalized = text.at(0).toUpperCase() + text.toLowerCase().slice(1,);

    // return capitalized string
    return capitalized;
}


document.addEventListener("DOMContentLoaded", (event) => {

    console.log(getComputerChoice());

})