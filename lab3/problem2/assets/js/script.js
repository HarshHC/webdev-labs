const { fromEvent, interval, merge, EMPTY } = rxjs;

const {
  takeWhile,
  takeUntil,
  switchMap,
  scan,
  mapTo,
  startWith,
  repeat,
  switchMapTo,
  take,
} = rxjs.operators;

const hours = document.querySelector("#hour");
const mins = document.querySelector("#mins");

const startBtn = document.querySelector("#startBtn");

const getStartValue = () => {
  return hours.value * 60 * 60 + mins.value * 60;
};

const startObservable = fromEvent(startBtn, "click");
const hourChangeObs = fromEvent(hours, "change");

// const timer = i.pipe(take(startValue));
let timerStarted = false;

// for now, let's just log the event on each click
const subscription = startObservable.subscribe(() => {
  const startValue = getStartValue();
  const i = interval(1000);
  const timer = i.pipe(take(startValue));

  timer.subscribe((x) => {
    result.innerHTML = startValue - x;
    // console.log(startValue - x))
  });
  timerStarted = true;
});
