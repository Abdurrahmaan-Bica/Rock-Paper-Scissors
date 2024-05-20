const availableOptions = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function getComputerChoice() {
    return availableOptions[Math.floor(Math.random() * availableOptions.length)];
}

function checkTheWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = checkTheWinner(playerSelection, computerSelection);

    playerDisplay.innerHTML = `Player: ${playerSelection}`;
    computerDisplay.innerHTML = `Computer: ${computerSelection}`;

    if (result === "Draw") {
        resultDisplay.innerHTML = 'It is a Draw!';
    } else if (result === "Player") {
        resultDisplay.innerHTML = `You Won! ${playerSelection} beats ${computerSelection}`;
    } else if (result === "Computer") {
        resultDisplay.innerHTML = `You Lost! ${computerSelection} beats ${playerSelection}`;
    }
}
