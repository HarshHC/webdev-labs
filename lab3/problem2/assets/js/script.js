const { fromEvent, interval, merge, EMPTY } = rxjs;
const { take } = rxjs.operators;

const hours = document.querySelector("#hour");
const mins = document.querySelector("#mins");
const secs = document.querySelector("#secs");
const result = document.querySelector("#result");

const startBtn = document.querySelector("#startBtn");

const getStartValue = () => {
  let hrs = hours.value * 60 * 60;
  let min = mins.value * 60;
  let sec = parseInt(secs.value);
  return hrs + min + sec;
};

const getTimeFromSeconds = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / (60 * 60));
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  return { hours, mins, seconds };
};

const startObservable = fromEvent(startBtn, "click");

const startTime = getTimeFromSeconds(getStartValue());
result.innerHTML =
  startTime.hours +
  "h " +
  (startTime.mins == 60 ? 0 : startTime.mins) +
  " mins " +
  startTime.seconds +
  " seconds";

let timerSubscription = null;

const subscription = startObservable.subscribe(() => {
  if (timerSubscription) timerSubscription.unsubscribe();

  const startValue = getStartValue();
  const timer = interval(1000).pipe(take(getStartValue()));

  timerSubscription = timer.subscribe((x) => {
    const time = getTimeFromSeconds(startValue - x);

    result.innerHTML =
      time.hours +
      "h " +
      (time.mins == 60 ? 0 : time.mins) +
      " mins " +
      time.seconds +
      " seconds";
  });
});
