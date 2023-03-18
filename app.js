// Variáveis globais
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let winner = null;
let score = {
  X: 0,
  O: 0,
  draw: 0
};

// Função que alterna o jogador atual
function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Função que verifica se há um vencedor
function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      winner = board[a];
      return true;
    }
  }

  if (board.includes('')) {
    return false;
  } else {
    winner = 'draw';
    return true;
  }
}

// Função que atualiza o tabuleiro
function updateBoard() {
  for (let i = 0; i < board.length; i++) {
    document.getElementById(`cell-${i}`).textContent = board[i];
  }
}

// Função que atualiza o placar
function updateScore() {
  document.getElementById('x-score').textContent = score.X;
  document.getElementById('o-score').textContent = score.O;
  document.getElementById('draw-score').textContent = score.draw;
}

// Função que inicia um novo jogo
function newGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  winner = null;
  updateBoard();
  document.getElementById('message').textContent = 'Jogador X começa';
}

// Função que manipula o evento de clique nas células
function cellClickHandler(event) {
  const cellIndex = event.target.dataset.index;

  if (board[cellIndex] !== '' || winner !== null) {
    return;
  }

  board[cellIndex] = currentPlayer;
  updateBoard();

  if (checkWinner()) {
    if (winner === 'draw') {
      document.getElementById('message').textContent = 'Empate!';
      score.draw++;
    } else {
      document.getElementById('message').textContent = `Jogador ${winner} ganhou!`;
      score[winner]++;
    }

    updateScore();
  } else {
    togglePlayer();
    document.getElementById('message').textContent = `Jogador ${currentPlayer} é a sua vez`;
  }
}

// Event listeners
document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', cellClickHandler);
});

document.getElementById('new-game').addEventListener('click', newGame);

// Inicialização do jogo
newGame();


 
