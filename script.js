let minutes = 60;
const hourTimer = document.getElementById("hourTimer");
const hourInterval = setInterval(() => {
  minutes--;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  hourTimer.textContent =
    String(hours).padStart(2, "0") + ":" +
    String(mins).padStart(2, "0");
  if (minutes === 30) {
    alert("Залишилось менше половини часу!");
  }
  if (minutes === 0) {
    clearInterval(hourInterval);
  }
}, 60000); 
const msTimer = document.getElementById("msTimer");
const startBtn = document.getElementById("startBtn");
const animationBox = document.getElementById("animationBox");
let timeMs = 30000;
let msInterval;
startBtn.onclick = () => {
  startBtn.disabled = true;
  animationBox.classList.remove("animate");
  animationBox.style.display = "none";
  timeMs = 30000;
  msInterval = setInterval(() => {
    timeMs--;
    msTimer.textContent = (timeMs / 1000).toFixed(3);
    if (timeMs === 10000) {
      animationBox.style.display = "block";
      animationBox.classList.add("animate");
    }
    if (timeMs === 0) {
      clearInterval(msInterval);
      animationBox.classList.remove("animate");
      startBtn.disabled = false;
      alert("Час вийшов!");
    }
  }, 1);
};
