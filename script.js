/**
 * emulates the computer player by returning a
 * random choice between "Rock", "Paper" and "Scissors".
 * 
 * @return {string} a pseudorandom random string
 */

function getComputerChoice() {

    // initialize array of choices
    choices = ["Rock", "Paper", "Scissors"];

    // pick random choice
    choice = choices[Math.floor(Math.random() * choices.length)];

    // return choice
    return choice;
}

document.addEventListener("DOMContentLoaded", (event) => {



})