import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const date = document.querySelector('#datetime-picker')
const btn = document.querySelector('[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const min = document.querySelector('[data-minutes]');
const sec = document.querySelector('[data-seconds]');
const spans = document.querySelectorAll('.value');

let timerId = null;

btn.disabled = true;

flatpickr(date, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btn.disabled = true;
    } else {
      btn.disabled = false;

      Notiflix.Notify.success('Lets go?');
    }
  },
});

  btn.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  spans.forEach(item => item.classList.toggle('end'));
  btn.disabled = true;
  date.disabled = true;
  timerId = setInterval(() => {
    const choosenDate = new Date(date.value);
    const timeToFinish = choosenDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeToFinish);

    day.textContent = addLeadingZero(days);
    hour.textContent = addLeadingZero(hours);
    min.textContent = addLeadingZero(minutes);
    sec.textContent = addLeadingZero(seconds);

    if (timeToFinish < 1000) {
      spans.forEach(item => item.classList.toggle('end'));
      clearInterval(timerId);
      date.disabled = false;
    }
  }, 1000);
}

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

function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}

//2вариант
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';

// const refs = {
//   input: document.querySelector('#datetime-picker'),
//   start: document.querySelector('button[data-start]'),
//   days: document.querySelector('span[data-days]'),
//   hours: document.querySelector('span[data-hours]'),
//   mins: document.querySelector('span[data-minutes]'),
//   secs: document.querySelector('span[data-seconds]'),
// };

// let intervalId = null;
// refs.start.disabled = true;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);

//     if (selectedDates[0] < new Date()) {
//       refs.start.disabled = true;
//       Notiflix.Notify.failure('Please choose a date in the future! Do not look back..');
//       return;
//     }
//     if (selectedDates[0] > new Date()) {
//       refs.start.disabled = false;
//     }

//     refs.start.addEventListener('click', () => {
//       intervalId = setInterval(() => {
//         const differenceInTime = selectedDates[0] - new Date();

//         if (differenceInTime < 1000) {
//           clearInterval(intervalId);
//         }
//         const result = convertMs(differenceInTime);
//         viewOfTimer(result);
//       }, 1000);
//     });
//   },
// };

// flatpickr('#datetime-picker', options);

// function viewOfTimer({ days, hours, minutes, seconds }) {
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.mins.textContent = `${minutes}`;
//   refs.secs.textContent = `${seconds}`;
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = addLeadingZero(Math.floor(ms / day));
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }