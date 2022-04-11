let pauseExample = document.getElementById("pause-example");
let startStop = document.getElementById("start-stop");

startStop.addEventListener("click", playPause);

function playPause() {
  pauseExample.classList.toggle("paused");
}
