
/* eslint-disable no-undef */

"use strict";

let filterRangeInPlace = (arr, a, b) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element < a || element > b) {
      arr.splice(index, 1);
    }
  }
}

describe("Filter range 'in place'", () => {
  let arr = [5, 3, 8, 1];
  filterRangeInPlace(arr, 1, 4);
  it("filterRangeInPlace(arr, 1, 4) == [3,1]", () => {
    assert.equal(arr.toString(), "3,1");
  });
});