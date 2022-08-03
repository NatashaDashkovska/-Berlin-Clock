import { refs } from './refs';

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

export function createFiveHours(hours) {
  const fullFiveHours = Number.parseInt(hours / 5);
  const selector = `.num-${fullFiveHours}`;

  const fullTime = refs.fiveHoursRef.querySelector(selector);
  fullTime.classList.add('active');
}

createFiveHours(hours);
