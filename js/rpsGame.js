// Test setup
const testBtn = document.querySelector("#testButton");

testBtn.addEventListener('click', gameThreeRounds);
// Multiple Rounds
var playerScore = 0;
var computerScore = 0;

function gameThreeRounds() {
    while (playerScore < 3 && computerScore < 3) {
        gameSingleRound();
        alert (`The score is: Player: ${playerScore} vs Computer: ${computerScore}`);
    }
};
function gameFiveRounds() {
    while (playerScore < 5 && computerScore < 5) {
        gameSingleRound();
        alert (`The score is: Player: ${playerScore} vs Computer: ${computerScore}`);
    }
};
function gameSevenRounds() {
    while (playerScore < 7 && computerScore < 7) {
        gameSingleRound();
        alert (`The score is: Player: ${playerScore} vs Computer: ${computerScore}`);
    }
};
// Single Round
function gameSingleRound() {
    playerMove();
    computerMove();
    if ((playerChoice === "rock") && (computerChoice === "rock")) {
        alert (`Test Success, DRAW! You both played ${playerChoice}`);
        playerScore += 0;
        computerScore +=0;
    } else if ((playerChoice === "rock") && (computerChoice === "paper")) {
        alert (`Test Success, DEFEAT! ${computerChoice} beats ${playerChoice}`);
        computerScore += 1;
    } else if ((playerChoice === "rock") && (computerChoice === "scissors")) {
        alert (`Test Success, VICTORY! ${playerChoice} beats ${computerChoice}`);
        playerScore += 1;
    } else if ((playerChoice === "paper") && (computerChoice === "rock")) {
        alert (`Test Success, VICTORY! ${playerChoice} beats ${computerChoice}`);
        playerScore += 1;
    } else if ((playerChoice === "paper") && (computerChoice === "paper")) {
        alert (`Test Success, DRAW! You both played ${playerChoice}`);
        playerScore += 0;
        computerScore += 0;
    } else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
        alert (`Test Success, DEFEAT! ${computerChoice} beats ${playerChoice}`);
        computerScore += 1;
    } else if ((playerChoice === "scissors") && (computerChoice === "rock")) {
        alert (`Test Success, DEFEAT! ${computerChoice} beats ${playerChoice}`);
        computerScore += 1;
    } else if ((playerChoice === "scissors") && (computerChoice === "paper")) {
        alert (`Test Success, VICTORY! ${playerChoice} beats ${computerChoice}`);
        playerScore += 1;
    } else if ((playerChoice === "scissors") && (computerChoice === "scissors")) {
        alert (`Test Success, DRAW! You both played ${playerChoice}`);
        playerScore += 0;
        computerScore += 0;
    } else {
        alert (`Test FAILED!`);
    }  
};

// Computer Selection
var computerChoice = "";
const computerArray = ["rock", "paper", "scissors"];

function computerMove() {
    computerChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
};
// Player Selection
var playerInput = "";
var playerChoice = "";

function playerMove() {
    playerInput = prompt (`Please enter "rock", "paper" or "scissors"`);
    playerChoice = playerInput.toLowerCase();
};


