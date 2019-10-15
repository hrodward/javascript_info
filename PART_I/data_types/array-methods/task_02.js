
/* eslint-disable no-undef */

"use strict";

let filterRange = (arr, a, b) => {
  let filteredArrary = arr.filter(value => value >= a && value <= b);
  return filteredArrary;
}

describe("Filter range", () => {
  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);
  it("filterRange(arr, 1, 4) == [3,1]", () => {
    assert.equal(filtered.toString(), "3,1");
  });
  it("arr == [5,3,8,1]", () => {
    assert.equal(arr.toString(), "5,3,8,1");
  });
});