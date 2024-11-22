let player1Choice = '';
let player2Choice = '';
let gameMode = '';

function startGame(mode) {
    gameMode = mode;
    document.querySelector('.mode-selection').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
    if (gameMode === 'friend') {
        document.getElementById('player2Area').style.display = 'block';
    } else {
        document.getElementById('computerModeForm').style.display = 'block';
    }
}

function playerChoice(choice, player) {
    if (player === 1) {
        player1Choice = choice;
        document.getElementById('player1Choice').innerText = 'Player 1 chose: ' + choice;
    } else {
        player2Choice = choice;
        document.getElementById('player2Choice').innerText = 'Player 2 chose: ' + choice;
    }

    if (gameMode === 'friend') {
        if (player1Choice && player2Choice) {
            displayResult();
        }
    } else if (gameMode === 'computer') {
        if (player1Choice) {
            playWithComputer(player1Choice);
        }
    }
}

function playWithComputer(player1Choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('player2Choice').innerText = 'Computer chose: ' + computerChoice;

    displayResult(player1Choice, computerChoice);
}

function displayResult() {
    let result = '';
    if (gameMode === 'friend') {
        if (player1Choice === player2Choice) {
            result = 'It\'s a draw!';
        } else if (
            (player1Choice === 'rock' && player2Choice === 'scissors') ||
            (player1Choice === 'paper' && player2Choice === 'rock') ||
            (player1Choice === 'scissors' && player2Choice === 'paper')
        ) {
            result = 'Player 1 wins!';
        } else {
            result = 'Player 2 wins!';
        }
    } else {
        const computerChoice = document.getElementById('player2Choice').innerText.split(': ')[1].toLowerCase();
        if (
            (player1Choice === 'rock' && computerChoice === 'scissors') ||
            (player1Choice === 'paper' && computerChoice === 'rock') ||
            (player1Choice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'Player 1 wins!';
        } else if (player1Choice === computerChoice) {
            result = 'It\'s a draw!';
        } else {
            result = 'Computer wins!';
        }
    }
    document.getElementById('gameResult').innerText = result;
    document.getElementById('resultArea').style.display = 'block';
}

function restartGame() {
    player1Choice = '';
    player2Choice = '';
    document.getElementById('player1Choice').innerText = '';
    document.getElementById('player2Choice').innerText = '';
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('resultArea').style.display = 'none';
    document.querySelector('.mode-selection').style.display = 'block';
    document.getElementById('player2Area').style.display = 'none';
    document.getElementById('computerModeForm').style.display = 'none';
}
