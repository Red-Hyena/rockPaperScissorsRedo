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