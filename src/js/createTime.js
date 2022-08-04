import { refs } from './refs';

export function createFiveHours(hours) {
  const fullFiveHours = Number.parseInt(hours / 5);

  for (let i = 0; i < fullFiveHours; i += 1) {
    const selector = `.num-${i}`;
    const fullTime = refs.fiveHoursRef.querySelector(selector);
    fullTime.classList.add('active-red');
  }
}

export function createOneHour(hours) {
  const fullOneHours = hours % 5;

  for (let i = 0; i < fullOneHours; i += 1) {
    const selector = `.num-${i}`;
    const fullTime = refs.oneHourRef.querySelector(selector);
    fullTime.classList.add('active-red');
  }
}

export function createFiveMinutes(minutes) {
  const fullFiveHours = Number.parseInt(minutes / 5);
  const quarter = Number.parseInt(minutes / 15);

  for (let i = 0; i < fullFiveHours; i += 1) {
    const selector = `.num-${i}`;
    const fullTime = refs.fiveMinutesRef.querySelector(selector);
    fullTime.classList.add('active-orange');
  }

  for (let i = 0; i < quarter; i += 1) {
    let num = (i + 1) * 3 - 1;
    const selector = `.num-${num}`;

    const fullTime = refs.fiveMinutesRef.querySelector(selector);
    fullTime.classList.remove('active-orange');
    fullTime.classList.add('active-red');
  }
}

export function createOneMinute(minutes) {
  const fullOneHours = minutes % 5;

  for (let i = 0; i < fullOneHours; i += 1) {
    const selector = `.num-${i}`;

    const fullTime = refs.oneMinuteRef.querySelector(selector);

    fullTime.classList.add('active-orange');
  }
}

export function createSeconds(seconds) {
  const fullOneHours = seconds % 2;
  if (fullOneHours === 0) {
    refs.secondsRef.classList.add('active-orange');
  }
  if (fullOneHours > 0) {
    refs.secondsRef.classList.remove('active-orange');
  }
}

setInterval(() => {
  const date = new Date();
  // const date = new Date(2022, 5, 8, 23, 59, 59);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  if (seconds === 0) {
    const red = document.querySelectorAll('.active-red');
    const orange = document.querySelectorAll('.active-orange');

    Array.from(red).map(el => el.classList.remove('active-red'));
    Array.from(orange).map(el => el.classList.remove('active-orange'));
  }
  createFiveHours(hours);
  createOneHour(hours);
  createFiveMinutes(minutes);
  createOneMinute(minutes);
  createSeconds(seconds);

  const time = `${hours}:${minutes}:${seconds}`;
  refs.timeRef.textContent = time;
}, 1000);
