/* eslint-disable no-undef */

"use strict";

let value = "Surprise!";

function f() {
  let value = "the closest value";

  function g() {
    // console.log(value);
    debugger; // in console: type alert(value); Surprise!
    // console.log(value);
  }

  return g;
}

let g = f();
g();