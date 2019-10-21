/* eslint-disable no-undef */

"use strict";

let debounce = (func, delay) => {
  let lastCall = new Date(0);
  let wrapper = (...args) => {
    let now = Date.now();
    if (now - lastCall > delay) {
      lastCall = now;
      func.apply(this, args);
    }
  }
  return wrapper;
}

let f = debounce(console.log, 1000);

f(1); // runs immediately
f(2); // ignored

setTimeout(() => f(3), 100); // ignored ( only 100 ms passed )
setTimeout(() => f(4), 1100); // runs
setTimeout(() => f(5), 1500); // ignored (less than 1000 ms from the last run)