/* eslint-disable no-undef */

"use strict";
let sum = (a) => {
  let currentSum = a;


  let f = (b) => {
    currentSum += b;
    return f;
  }

  f.valueOf = () => { // works also with toString
    return currentSum;
  };

  return f;
}

describe("Sum with an arbitrary amount of brackets", () => {

  it("Validate", () => {
    assert.equal(sum(1)(2), 3);
    assert.equal(sum(1)(2)(3), 6);
    assert.equal(sum(5)(-1)(2), 6);
    assert.equal(sum(6)(-1)(-2)(-3), 0);
    assert.equal(sum(0)(1)(2)(3)(4)(5), 15);
  });

});