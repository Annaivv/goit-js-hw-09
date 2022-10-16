import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  submitBtn: document.querySelector('button'),
  input: document.querySelectorAll('input'),
};

refs.form.addEventListener('submit', handleSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

function handleSubmit(e) {
  e.preventDefault();
  let userDelay = parseInt(refs.delay.value);
  let userPosition = 1;
  for (let index = 0; index < refs.amount.value; index += 1) {
    if (index > 0) {
      userDelay += parseInt(refs.step.value);
      userPosition += 1;
    }
    createPromise(userPosition, userDelay);
  }
  e.currentTarget.reset();
}
