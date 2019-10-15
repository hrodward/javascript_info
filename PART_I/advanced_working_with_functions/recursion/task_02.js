/* eslint-disable no-undef */

"use strict";

let factorial = n => {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

describe("Calculate factorial", () => {
  it("factorial(5) = 120", () => {
    assert.equal(factorial(5), 120);
  });

});
