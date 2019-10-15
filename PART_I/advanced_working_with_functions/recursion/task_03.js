/* eslint-disable no-undef */

"use strict";

let fib = n => {
  if (n <= 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

describe("Fibonacci numbers", () => {
  it("fib(3) = 2", () => {
    assert.equal(fib(3), 2);
  });
  it("fib(7) = 13", () => {
    assert.equal(fib(7), 13);
  });

});
