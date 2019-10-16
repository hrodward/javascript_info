/* eslint-disable no-undef */

"use strict";

function f() {
  let value = 123;

  function e() { console.log(value); }

  return e;
}

let g = f(); // g is reachable, and keeps the outer lexical environment in memory

g();