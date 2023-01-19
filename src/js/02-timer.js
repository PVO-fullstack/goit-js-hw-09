import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const btn = document.querySelector('button[data-start]');
const days = document.querySelector('.timer span[data-days]');
const hours = document.querySelector('.timer span[data-hours]');
const minutes = document.querySelector('.timer span[data-minutes]');
const seconds = document.querySelector('.timer span[data-seconds]');

let timeNow;
let time;
let timeout;
let selectedTime
btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timeNow = selectedDates[0].getTime();
    selectedTime = options.defaultDate.getTime()
    if (selectedTime > timeNow) {
      Notify.failure('Please choose a date in the future');
      btn.disabled = true;
      return;
    }
    btn.disabled = false;
  },
};

flatpickr("#datetime-picker", options);

btn.addEventListener('click', timeOf);

function timeOf() {
  time = timeNow - options.defaultDate.getTime();
  timeout = setInterval(() => {
    time -= 1000;
    const leftTime = convertMs(time);
    days.textContent = leftTime.days;
    hours.textContent = leftTime.hours;
    minutes.textContent = leftTime.minutes;
    seconds.textContent = leftTime.seconds;
    stopTime(time);
  }, 1000);
}

function stopTime(time) {
  if (time < 1000) {
    Notify.success('That time has come');
    clearInterval(timeout);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
