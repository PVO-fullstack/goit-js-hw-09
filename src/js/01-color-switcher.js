const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

stopButton.disabled = true;

startButton.addEventListener('click', onStartBtnClick);
stopButton.addEventListener('click', onStopBtnClick);

function onStartBtnClick(e) {
  startButton.disabled = true;
  stopButton.disabled = false;
  timerId = setInterval(() => changeBodyColor(getRandomHexColor()), 1000);
}

function onStopBtnClick(e) {
  stopButton.disabled = true;
  startButton.disabled = false;
  clearInterval(timerId);
}

function changeBodyColor(color) {
  body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}