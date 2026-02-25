let currentScreen = "menu";
let gamePaused = false;
let score = 0; // Variable para llevar el control de los puntos

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });
  
  const targetScreen = document.getElementById(id);
  if (targetScreen) {
    targetScreen.classList.add("active");
    currentScreen = id;
  }
}

function pauseGame() {
  gamePaused = true;
  showScreen("pause");
}

function resumeGame() {
  gamePaused = false;
  showScreen("game");
}

function gameOver(finalScore) {
  gamePaused = true;

  const scoreDisplay = document.getElementById("final-score");
  if (scoreDisplay) {
    scoreDisplay.innerText = finalScore;
  }
  showScreen("gameover");
}


function victory() {
  gamePaused = true;
  showScreen("victory");
}


function restartGame() {
  score = 0;
  gamePaused = false;

  showScreen("game");
}