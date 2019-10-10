
"use strict";

let getMaxSubSum = arr => {
  let maxSum = 0;
  let currSum = 0;
  for (let currVal of arr) {
    currSum += currVal;
    if (currVal > currSum) {
      currSum = currVal;
    }
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}

describe("A maximal subarray", () => {
  it("[-1, 2, 3, -9]) = 5", () => {
    assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
  });
  it("[2, -1, 2, 3, -9]) = 6", () => {
    assert.equal(getMaxSubSum([2, -1, 2, 3, -9]), 6);
  });
  it("[-1, 2, 3, -9, 11]) = 11", () => {
    assert.equal(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
  });
  it("[-2, -1, 1, 2]) = 3", () => {
    assert.equal(getMaxSubSum([-2, -1, 1, 2]), 3);
  });
  it("[100, -9, 2, -3, 5]) = 100", () => {
    assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100);
  });
  it("[1, 2, 3]) = 6", () => {
    assert.equal(getMaxSubSum([1, 2, 3]), 6);
  });
  it("[-1, -2, -3]) = 0", () => {
    assert.equal(getMaxSubSum([-1, -2, -3]), 0);
  });

});