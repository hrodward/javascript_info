/* eslint-disable no-undef */

"use strict";

let inBetween = (min, max) => {
  let fn = (x) => {
    return x >= min && x <= max;
  }
  return fn;
}

let inArray = arr => {
  return function (x) {
    return arr.includes(x);
  };
}

describe("Filter through function", () => {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  it("arr.filter(inBetween(3, 6)) = 3,4,5,6", () => {
    assert.equal(arr.filter(inBetween(3, 6)).join(','), "3,4,5,6");
  });
  it("arr.filter(inArray([1, 2, 10])) = 1,2", () => {
    assert.equal(arr.filter(inArray([1, 2, 10])).join(','), "1,2");
  });

});
