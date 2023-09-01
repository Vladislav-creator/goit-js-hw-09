function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const bodyEl = document.body;
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
  let timerId = null;
  onBodyColorChange = () => {
    btnStart.disabled = 'true'
    btnStop.removeAttribute("disabled")
     timerId = setInterval(() => {
      bodyEl.style.backgroundColor = getRandomHexColor()
    }, 1000);
   }  
btnStart.addEventListener("click", onBodyColorChange);

btnStop.addEventListener("click", () => {
  btnStart.removeAttribute("disabled")
  btnStop.disabled = 'true'
  clearInterval(timerId);
 })
 //2 вариант
// const refs = {
//   start: document.querySelector('[data-start]'),
//   stop: document.querySelector('[data-stop]'),
//   body: document.querySelector('body'),
// };

// const colorChanger = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       bodyBGColorChanger();
//     }, 1000);

//     refs.start.disabled = true;
//   },

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     refs.start.disabled = false;
//   },
// };

// refs.start.addEventListener('click', () => {
//   colorChanger.start();
// });

// refs.stop.addEventListener('click', () => {
//   colorChanger.stop();
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function bodyBGColorChanger() {
//   refs.body.style.backgroundColor = getRandomHexColor();
// }
 