/* eslint-disable no-undef */

"use strict";

function f(a, b) {
  console.log( a + b );
}
Function.prototype.defer = function(ms) {
  let callerFunc = this;
  let wrapper = function(...args) {
    setTimeout(() => callerFunc.apply(this, args), ms);
  }
  return wrapper;
}

f.defer(1000)(1, 2); // shows 3 after 1 second
