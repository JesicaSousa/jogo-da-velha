// define o jogador atual como "X"
let currentPlayer = "X";
// cria um objeto para armazenar o placar do usuário
let score = {
  userScore: 0
};

// seleciona todos os quadrados do jogo da velha
const squares = document.querySelectorAll(".square");
// seleciona o elemento de score do usuário
const userScore = document.querySelector("#userScore");

// adiciona um listener de click a todos os quadrados
squares.forEach(square => {
  square.addEventListener("click", () => {
    // se o quadrado já estiver marcado, sai da função
    if (square.textContent !== "") {
      return;
    }
    // marca o quadrado com o jogador atual
    square.textContent = currentPlayer;
    // alterna o jogador atual
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    // verifica se alguém ganhou
    if (checkWin()) {
      // se alguém ganhou, adiciona um ponto ao score do usuário
      score.userScore++;
      // atualiza o score na página
      userScore.textContent = score.userScore;
      // reinicia o jogo
      reset();
    } else if (checkTie()) {
      // se o jogo empatou, reinicia o jogo
      reset();
    }
  });
});

// verifica se alguém ganhou
function checkWin() {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < rows.length; i++) {
    const [a, b, c] = rows[i];
    if (squares[a].textContent !== "" && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
     
