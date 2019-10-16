/* eslint-disable no-undef */

"use strict";

let sum = x => {
  let inner = y => {
    return x + y;
  }
  return inner;
}


describe("Sum with closures", () => {
  it("sum(1)(2) = 3", () => {
    assert.equal(sum(1)(2), 3);
  });
  it("sum(5)(-1) = 4", () => {
    assert.equal(sum(5)(-1), 4);
  });

});
