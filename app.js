let currentPlayer = 'X';
let gameboard = ['', '', '', '', '', '', '', '', ''];

function render() {
  gameboard.forEach((value, index) => {
    document.getElementById(index).innerText = value;
  });
}

function handlePlayerClick(event) {
  const cellIndex = event.target.id;
  if (gameboard[cellIndex] === '') {
    gameboard[cellIndex] = currentPlayer;
    render();
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function handleResetClick() {
  currentPlayer = 'X';
  gameboard = ['', '', '', '', '', '', '', '', ''];
  render();
}

function checkWinner() {
  const winningCombos = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (gameboard[a] && gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c]) {
      alert(`Parabéns! ${currentPlayer} venceu o jogo!`);
      handleResetClick();
      return;
    }
  }

  if (!gameboard.includes('')) {
    alert('Empate!');
    handleResetClick();
  }
}

render();

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', handlePlayerClick);
});

document.getElementById('reset').addEventListener('click', handleResetClick);



