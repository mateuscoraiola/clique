let score = 0;
let timeLeft = 10;
let gameInterval;
let timerInterval;

const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const clickButton = document.getElementById("clickButton");
const message = document.getElementById("message");

clickButton.addEventListener("click", () => {
    // Adicionar 1 ponto cada vez que o botão for clicado
    score++;
    scoreDisplay.textContent = score;

    // Mensagem de incentivo
    if (score % 10 === 0) {
        message.textContent = `Você fez ${score} pontos! Continue clicando!`;
    }
});

// Função para iniciar o timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            clearInterval(gameInterval);
            clickButton.disabled = true;
            message.textContent = `Fim de jogo! Você fez ${score} pontos!`;
        }
    }, 1000);
}

// Função para iniciar o jogo
function startGame() {
    gameInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
        }
    }, 1000);
    
    startTimer();
}

startGame();
