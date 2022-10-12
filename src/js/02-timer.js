//Мінімальне оформлення елементів інтерфейсу
//Бібліотека flatpickr для вибору кінцевої дати й часу
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');
const dateTimePicker = document.querySelector('#datetime-picker');
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

    let initialTime = options.defaultDate.getTime();
    if (selectedTime < initialTime) {
      alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
      setInterval(() => {
        let currentDate = new Date();
        let currentTime = currentDate.getTime();
        convertMs(selectedTime - currentTime);
      }, 1000);
    }
  },
};

const fp = flatpickr(dateTimePicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {}

//Натисканням на кнопку «Start» починається відлік часу до обраної дати
//з моменту натискання.

// const str1 = '5';

// console.log(str1.padStart(2, '0'));
