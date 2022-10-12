//Мінімальне оформлення елементів інтерфейсу
//Бібліотека flatpickr для вибору кінцевої дати й часу
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');
const dateTimePicker = document.querySelector('#datetime-picker');

startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  dateFormat: 'Y-m-d H:i',
  minuteIncrement: 1,

  onClose(selectedDates) {
    const selectedTime = selectedDates[0].getTime();
    let currentTime = options.defaultDate.getTime();
    if (selectedTime < currentTime) {
      alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
    }
    console.log(convertMs(selectedTime - currentTime));
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

console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

//Натисканням на кнопку «Start» починається відлік часу до обраної дати
//з моменту натискання.
