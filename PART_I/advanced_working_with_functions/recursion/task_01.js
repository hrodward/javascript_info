/* eslint-disable no-undef */

"use strict";

let sumToLoop = n => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let sumToRec = n => {
  if (n == 0) {
    return 0;
  } else {
    return n + sumToRec(n - 1);
  }
}

let sumToArith = n => {
  return n * (1 + n) / 2;
}

describe("Sum all numbers till the given one", () => {
  it("sumToLoop(100) = 5050", () => {
    assert.equal(sumToLoop(100), 5050);
  });
  it("sumToRec(100) = 5050", () => {
    assert.equal(sumToRec(100), 5050);
  });
  it("sumToArith(100) = 5050", () => {
    assert.equal(sumToArith(100), 5050);
  });

});
