let board = [  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let player = 'X';
let gameOver = false;

function displayBoard() {
  console.log(board[0][0] + '|' + board[0][1] + '|' + board[0][2]);
  console.log('-+-+-');
  console.log(board[1][0] + '|' + board[1][1] + '|' + board[1][2]);
  console.log('-+-+-');
  console.log(board[2][0] + '|' + board[2][1] + '|' + board[2][2]);
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== ' ' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return true;
    }
  }

  for (let j = 0; j < 3; j++) {
    if (board[0][j] !== ' ' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
      return true;
    }
  }

  if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return true;
  }

  if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return true;
  }

  return false;
}

function switchPlayer() {
  player = player === 'X' ? 'O' : 'X';
}

while (!gameOver) {
  console.clear();
  displayBoard();
  console.log(`É a vez do jogador ${player}.`)

  let row1 = prompt('Digite a linha (1, 2 ou 3)');
  let row = parseInt(row1)
  let col1 = prompt('Digite a coluna (1, 2 ou 3)');
  let col = parseInt(col1)

  if (isNaN(row) || isNaN(col) || row < 1 || row > 3 || col < 1 || col > 3 || board[row - 1][col - 1] !== ' ') {
    console.log('Jogada inválida. Tente novamente.');
    continue;
  }

  board[row - 1][col - 1] = player; 

  if (checkWin()) {
    console.clear();
    displayBoard();
    console.log(`O jogador ${player} venceu!`);
    gameOver = true;
  } else if (!board.flat().includes(' ')) {
    console.clear();
    displayBoard();
    console.log('Empate!');
    gameOver = true;
  } else {
    switchPlayer();
  }
}
