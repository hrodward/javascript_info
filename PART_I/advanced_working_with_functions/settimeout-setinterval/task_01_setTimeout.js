/* eslint-disable no-undef */

"use strict";

// setTimeout

let printNumbers = (from, to) => {
  let current = from;

  let myFunc = () => {
    if (current == to) {
      clearTimeout(timerId);
    } else {
      console.log(current++);
      setTimeout(myFunc, 1000, current, to);
    }
  }

  let timerId = setTimeout(myFunc, 1000, from, to);
}

printNumbers(4, 9);