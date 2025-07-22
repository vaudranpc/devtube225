let startTime = 0;
let interval = null;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

// Met à jour l’affichage
function updateDisplay(ms) {
  const total = ms;
  const minutes = Math.floor(total / 60000);
  const seconds = Math.floor((total % 60000) / 1000);
  const milliseconds = total % 1000;

  const min = minutes.toString().padStart(2, "0");
  const sec = seconds.toString().padStart(2, "0");
  const milli = milliseconds.toString().padStart(3, "0");

  timerDisplay.textContent = `${min}:${sec}.${milli}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    const previousTime = startTime;
    const start = Date.now();

    interval = setInterval(() => {
      startTime = previousTime + (Date.now() - start);
      updateDisplay(startTime);
    }, 10); // 10 ms pour éviter surcharge
  }
}

function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  startTime = 0;
  updateDisplay(0);
}

// Initialisation
updateDisplay(0);

// Boutons
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
