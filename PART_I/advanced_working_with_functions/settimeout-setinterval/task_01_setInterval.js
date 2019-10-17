/* eslint-disable no-undef */

"use strict";

// setInterval
let printNumbers = (from, to) => {
  if (isNaN(counter)) {
    counter = from;
  }
  if (counter == to) {
    console.log("stop");
    clearInterval(timerId);
  }
  console.log(counter++);
}

let counter;
let timerId = setInterval(printNumbers, 1000, 4, 9);
console.log("timerId=" + timerId);
