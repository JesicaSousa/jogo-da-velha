// Variáveis globais
const players = ['X', 'O'];
let currentPlayer = players[0];
let gameStatus = ['', '', '', '', '', '', '', '', ''];
let scores = [0, 0];
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// Selecionando elementos da DOM
const squares = document.querySelectorAll('.square');
const message = document.querySelector('.message');
const player1Score = document.querySelector('.player1-score');
const player2Score = document.querySelector('.player2-score');

// Funções
function checkWin() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  return !gameStatus.includes('');
}

function resetGame() {
  gameStatus = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = players[0];
  message.textContent = `It's ${currentPlayer}'s turn`;
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

function updateScore(winner) {
  if (winner === players[0]) {
    scores[0]++;
    player1Score.textContent = scores[0];
  } else if (winner === players[1]) {
    scores[1]++;
    player2Score.textContent = scores[1];
  }
}

function handleClick(e) {
  const squareIndex = parseInt(e.target.dataset.index);
  if (gameStatus[squareIndex] !== '') {
    return;
  }
  gameStatus[squareIndex] = currentPlayer;
  e.target.textContent = currentPlayer;
  if (checkWin()) {
    updateScore(currentPlayer);
    message.textContent = `${currentPlayer} wins!`;
    setTimeout(resetGame, 1500);
    return;
  }
  if (checkTie()) {
    message.textContent = "It's a tie!";
    setTimeout(resetGame, 1500);
    return;
  }
  currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
  message.textContent = `It's ${currentPlayer}'s turn`;
}

// Event listeners
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', handleClick);
}

// Reiniciando o jogo
const restartButton = document.querySelector('.restart-button');
restartButton.addEventListener('click', resetGame);

 
