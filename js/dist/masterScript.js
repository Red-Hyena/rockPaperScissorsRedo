// Page Transitions
var preGamePage = document.getElementById('preGamePage');
var gamePage = document.getElementById('gamePage');

var btnThreeRounds = document.querySelector('#btnThreeRounds');
var btnFiveRounds = document.querySelector('#btnFiveRounds');
var btnSevenRounds = document.querySelector('#btnSevenRounds');
var resetBtn = document.querySelector("#resetBtn")

btnThreeRounds.addEventListener('click', pageTransitionRoundBtn);
btnFiveRounds.addEventListener('click', pageTransitionRoundBtn);
btnSevenRounds.addEventListener('click', pageTransitionRoundBtn);
resetBtn.addEventListener('click', pageTransitionResetBtn);

function pageTransitionRoundBtn() {
    var roundNumber = parseInt(this.value);
    preGamePage.className = "unloadedPage";
    gamePage.className = "loadedPage";
    alert(`${roundNumber}`);
}

function pageTransitionResetBtn() {
    gamePage.className = "unloadedPage";
    preGamePage.className = "loadedPage";
}
// Multiple Rounds
var playerScore = 0;
var computerScore = 0;

function gameThreeRounds() {
    while (playerScore.length < 3 && computerScore.length < 3) {
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
        playerScore.push(0) += 0;
        computerScore.push(0) +=0;
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

// Scoring System
var playerScore = [];
var computerScore = [];

gameThreeRounds();
// Results Table Script
function generateTableHead(table) {
    let thead = table.createTHead();
}

let table = document.querySelector("#resultsTable");
generateTableHead(table);