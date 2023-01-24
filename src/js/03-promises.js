import { Notify } from 'notiflix/build/notiflix-notify-aio';

const promiseForm = document.querySelector('.form');
const submitBtn = document.querySelector('.form > button');
const delayInput = promiseForm.querySelector('[name="delay"]');
const stepInput = promiseForm.querySelector('[name = "step"]');
const amountInput = promiseForm.querySelector('[name = "amount"]');
let delay;
let amount;
let step;

submitBtn.addEventListener('click', onClick);
amountInput.addEventListener('input', readAmountValue);
delayInput.addEventListener('input', readDelayValue);
stepInput.addEventListener('input', readStepValue);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  });
};

function createPromises() {
  for (let i = 1; i <= amount; i += 1) {
    let delayN = Number(delay) + (i - 1) * Number(step);
    createPromise(i, delayN).then(({ position, delay }) => {

      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function readAmountValue(event) {
  amount = event.target.value;
}

function readDelayValue(event) {
  delay = event.target.value;
}

function readStepValue(event) {
  step = event.target.value;

}

function onClick(event) {
  event.preventDefault();
  createPromises();
}



