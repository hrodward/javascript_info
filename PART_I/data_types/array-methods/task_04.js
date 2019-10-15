
/* eslint-disable no-undef */

"use strict";

let sortInReverse = arr => {
  arr.sort((a, b) => b - a);
  console.log("arr=" + arr);
  return arr;
}

describe("Sort in the reverse order", () => {
  let arr = [5, 2, 1, -10, 8];
  sortInReverse(arr);
  it("sortInReverse(arr) == [8, 5, 2, 1, -10]", () => {
    assert.equal(arr.toString(), "8,5,2,1,-10");
  });
});