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


}


document.addEventListener("DOMContentLoaded", (event) => {

    // initialize base score
    let score = 0;

    // initialize current round
    let currentRound = 1;

    // intialize max rounds
    let maxRounds = 0;

    // update round count based on slider position
    const roundsSelector = document.querySelector("#rounds-count");
    document.querySelector("#rounds-label").innerHTML = `Rounds: ${roundsSelector.value}`;
    roundsSelector.addEventListener("change", (event) => {
        let rounds = roundsSelector.value;
        document.querySelector("#rounds-label").innerHTML = `Rounds: ${rounds}`;
    });

    // show/hide backstory (i.e. instructions) panel when chevron is pressed
    const instructionsBtn = document.querySelector("#instructions-btn");
    instructionsBtn.addEventListener("click", (event) => {
        document.querySelector("#instructions-section").classList.toggle("invisible-section");
    });

    let continueBtn = document.querySelector("#continue-btn");
    continueBtn.addEventListener("click", (event) => {
        // hide rounds selection section
        document.querySelector("#rounds-container").classList.add("invisible-section");
        // show game container
        document.querySelector("#game-container-elements").classList.remove("invisible-section");
        // update max rounds
        maxRounds = document.querySelector("#rounds-count").value;
        // display rounds on screen
        document.querySelector("#current-round-label").innerHTML = `Round ${currentRound}/${maxRounds}`;
    });

    let choiceBtns = document.querySelectorAll("#game-selectors div");
    choiceBtns.forEach((choiceBtn) => {
        choiceBtn.addEventListener("click", (event) => {
            // retrieve player choice and computer choice
            let playerChoice = choiceBtn.getAttribute("id");
            let computerChoice = getComputerChoice();
            // play single round
            let result = playRound(playerChoice, computerChoice);
            // update player score
            score += result.flag;
            // display score
            document.querySelector("#game-score").innerHTML = `Score: ${score}`;
            // display result message
            document.querySelector("#game-result").innerHTML = result.message;
            // update current round
            currentRound += 1;
            // reset game
            if (currentRound > maxRounds) {
                // display alert based on score
                if (score > 0) {
                    alert(`You Win! You won ${score} round(s) more than the computer.`);
                }
                else if (score < 0) {
                    alert(`You Lose! The computer won ${-1 * score} round(s) more than you.`);
                }
                else {
                    alert(`You Tied!`);
                }
                // reload window on alert confirmation
                window.location.reload();
            }
            else {
                // display rounds on screen
                document.querySelector("#current-round-label").innerHTML = `Round ${currentRound}/${maxRounds}`;
            }
        });
    });
})