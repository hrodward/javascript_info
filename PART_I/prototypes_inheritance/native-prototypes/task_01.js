/* eslint-disable no-undef */

"use strict";

function g() {
  console.log('Bye!');
}
function f() {
  console.log("Hello!");
}
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

g.defer(1000); // shows "Hello!" after 1 second
