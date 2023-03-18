const X_CLASS = 'x';
const O_CLASS = 'o';
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

let currentClass;
let board = ['', '', '', '', '', '', '', '', ''];
let isGameOver = false;

startGame();

resetButton.addEventListener('click', startGame);

function startGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  isGameOver = false;
  currentClass = X_CLASS;
  cells.forEach(cell => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(O_CLASS);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  message.innerText = '';
}

function handleClick(e) {
  const cell = e.target;
  const cellIndex = Array.from(cells).indexOf(cell);
  if (board[cellIndex] !== '' || isGameOver) return;
  board[cellIndex] = currentClass;
  cell.classList.add(currentClass);
  if (checkWin()) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
  }
}

function swapTurns() {
  currentClass = currentClass === X_CLASS ? O_CLASS : X_CLASS;
}

function checkWin() {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return board[index] === currentClass;
    });
  });
}

function isDraw() { }
 
