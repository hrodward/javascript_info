/* eslint-disable no-undef */

"use strict";

let delay = (func, delay) => {
  let wrapper = (...args) => {
    return setTimeout(() => func.apply(this, args), delay);
  }
  return wrapper;
}

function f(x) {
  console.log(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test 1000"); // shows "test" after 1000ms
f1500("test 1500"); // shows "test" after 1500ms
