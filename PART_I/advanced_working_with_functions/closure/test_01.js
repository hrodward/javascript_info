/* eslint-disable no-undef */

"use strict";

function makeCounter() {
  let count = 0;

  return function() {
    return count++; // has access to the outer "count"
  };
}

let counter = makeCounter();

console.log( makeCounter()() ); // 0
console.log( counter() ); // 0
console.log( counter() ); // 1
