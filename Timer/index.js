let startTime;
let timerInterval;

const startTimer = () => {
  startTime = new Date();
  const clock = document.querySelector("h2");
  const updateClock = () => {
    const now = new Date();
    const diff = now - startTime;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
  };
  updateClock();
  timerInterval = setInterval(updateClock, 1000);
};

const pauseTimer = () => {
  clearInterval(timerInterval);
};

const stopTimer = () => {
  clearInterval(timerInterval);
  const clock = document.querySelector("h2");
  clock.innerHTML = "00:00:00";
};

const startButton = document.querySelectorAll("button")[0];
const pauseButton = document.querySelectorAll("button")[1];
const stopButton = document.querySelectorAll("button")[2];

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);