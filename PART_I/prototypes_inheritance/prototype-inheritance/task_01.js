/* eslint-disable no-undef */

"use strict";

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__ : head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__ : table
};

let pockets = {
  money: 2000,
  __proto__ : bed
};

describe("Searching algorithm", () => {
  it("Pen", () => {
    assert.equal(pockets.pen, 3);
    assert.equal(bed.glasses, 1);
  });
});