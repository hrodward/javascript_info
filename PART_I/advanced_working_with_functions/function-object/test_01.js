/* eslint-disable no-undef */

"use strict";

function makeCounter() {
  // instead of:
  // let count = 0

  function counter() {
    count: 0;
    return counter.count++;
  }

  // counter.count = 0;

  return counter;
}

let counter = makeCounter();
console.log( counter() ); // 0 --> NaN
console.log( counter() ); // 1 --> NaN