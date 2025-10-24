const playBtn = document.querySelector("#playBtn");
const audio = new Audio("assets/audio/song1.mp3"); // place song1.mp3 in assets/audio

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.src = "assets/icons/pause_icon.png";
  } else {
    audio.pause();
    playBtn.src = "assets/icons/play_icon.png";
  }
});

const progressBar = document.querySelector(".progress-bar");
const currTime = document.querySelector(".curr-time");
const totTime = document.querySelector(".tot-time");

audio.addEventListener("loadedmetadata", () => {
  totTime.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  progressBar.value = (audio.currentTime / audio.duration) * 100;
  currTime.textContent = formatTime(audio.currentTime);
});

progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
