/**
 * simulates the computer player by returning a
 * random choice between "Rock", "Paper" and "Scissors".
 * 
 * @returns {string} - pseudorandom string; "Rock", "Paper" or "Scissors".
 */

function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}


/**
 * simulates a single round of rock paper scissors.
 * 
 * @param {string} playerSelection - the player's choice string; rock / paper / scissors.
 * @param {string} computerSelection - the computer's random choice string; rock / paper / scissors".
 * @returns {Object} - an object containing a message and flag:
 * - message: a string declaring the winner
 * - flag: an integer declaring the winner (0 for tie, 1 for player, -1 for computer)
 */

function playRound(playerSelection, computerSelection) {

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

    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

    if (playerSelection === computerSelection) {
        return {
            message: "Tie!",
            flag: 0
        }
    }
    else if (combinations[playerSelection].winTo === computerSelection) {
        return {
            message: `You Win! ${playerSelection} beats ${computerSelection}`,
            flag: 1
        };
    }
    else if (combinations[playerSelection].loseTo === computerSelection) {
        return {
            message: `You Lose! ${computerSelection} beats ${playerSelection}`,
            flag: -1
        };
    }
}


/**
 * capitalizes the first letter of a string.
 * 
 * @param {string} text - mixed-case input string.
 * @returns {string} - first letter capitalized string.
 */

function capitalize(text) {

    let capitalized = text.at(0).toUpperCase() + text.toLowerCase().slice(1,);
    return capitalized;
}

/**
 * simulates a number of rock-paper-scissor rounds.
 * 
 * @param {number} rounds - number of rock-paper-scissor rounds.
 * @returns {string} - a message string declaring the overall winner.
 */

function game(rounds) {

    let score = 0;

    for (let i = rounds; i > 0; i--) {

        let playerChoice = prompt(`Round ${rounds - i + 1}/${rounds} - Enter your choice (rock / paper / scissors):`);
        let computerChoice = getComputerChoice();

        let result = playRound(playerChoice, computerChoice);
        score += result.flag;

        console.log(result.message);
    }

    if (score > 0) {
        return `You Win! You won ${score}/${rounds} rounds.`
    }
    else if (score < 0) {
        return `You Lose! The computer won ${score * -1}/${rounds} rounds.`
    }   
    else {
        return `You Tied!`
    }
}


document.addEventListener("DOMContentLoaded", (event) => {

    let message = game(5);
    console.log(message);

})