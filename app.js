// Definindo as variáveis
let currentPlayer = "X";
let gameStatus = "";
let numMoves = 0;

// Capturando os elementos HTML do jogo
const statusDisplay = document.querySelector(".game-status");
const resetButton = document.querySelector(".game-reset");
const cellElements = document.querySelectorAll(".cell");

// Função para alternar o jogador atual
function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayer + " é a sua vez";
}

// Função para verificar se há um vencedor
function checkWinner() {
  const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Verificando se alguma combinação de movimentos venceu
  for (let i = 0; i < winningMoves.length; i++) {
    const [a, b, c] = winningMoves[i];
    if (
      cellElements[a].innerHTML === currentPlayer &&
      cellElements[b].innerHTML === currentPlayer &&
      cellElements[c].innerHTML === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

// Função para reiniciar o jogo
function resetGame() {
  currentPlayer = "X";
  gameStatus = "";
  numMoves = 0;
  statusDisplay.innerHTML = currentPlayer + " é a sua vez";
  cellElements.forEach(cell => {
    cell.innerHTML = "";
  });
}

// Função que será chamada quando uma célula for clicada
function cellClickHandler(event) {
  const cell = event.target;

  // Verificando se a célula já foi marcada
  if (cell.innerHTML !== "") {
    return;
  }

  cell.innerHTML = currentPlayer;
  numMoves++;

  // Verificando se houve um vencedor ou empate
  if (checkWinner()) {
    gameStatus = currentPlayer + " venceu!";
  } else if (numMoves === 9) {
    gameStatus = "Empate!";
  } else {
    changePlayer();
  }

  // Atualizando o status do jogo
  statusDisplay.innerHTML = gameStatus;
}

// Adicionando o evento de clique para cada célula
cellElements.forEach(cell => {
  cell.addEventListener("click", cellClickHandler);
});

// Adicionando o evento de clique para o botão de reset
resetButton.addEventListener("click", resetGame);


 
