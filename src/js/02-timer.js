//Мінімальне оформлення елементів інтерфейсу
//Бібліотека flatpickr для вибору кінцевої дати й часу
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[data-start]');
const daysContent = document.querySelector('span[data-days]');
const hoursContent = document.querySelector('span[data-hours]');
const minutesContent = document.querySelector('span[data-minutes]');
const secondsContent = document.querySelector('span[data-seconds]');

startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  dateFormat: 'Y-m-d H:i',
  minuteIncrement: 1,

  onClose(selectedDates) {
    const selectedTime = selectedDates[0].getTime();

    if (selectedTime < options.defaultDate) {
      Notify.failure('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};

const fp = flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', updateTimer);

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
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimer({ days, hours, minutes, seconds }) {
  let timerId = setInterval(() => {
    let currentTime = Date.now();
    let userTime = fp.selectedDates[0].getTime();
    let timeDifference = userTime - currentTime;
    if (timeDifference > 1) {
      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      daysContent.textContent = `${days}`;
      hoursContent.textContent = `${hours}`;
      minutesContent.textContent = `${minutes}`;
      secondsContent.textContent = `${seconds}`;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}
