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
  },
};

const fp = flatpickr(dateTimePicker, options);

//Натисканням на кнопку «Start» починається відлік часу до обраної дати
//з моменту натискання.
