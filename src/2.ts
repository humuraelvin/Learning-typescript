const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;

let startTime = new Date();
let endTime: Date;

setTimeout(() => {
  endTime = new Date;
}, RANDOM_WAIT_TIME);

