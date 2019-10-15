
"use strict";

let random = (min, max) => {
  let range = max - min;
  return Math.random() * range + min;
}

describe("Random in Max Min", () => {
  it("random(4,9) is greater or equal to 4", () => {
    assert.isAtLeast(random(4,9), 4);
  });
  it("random(4,9) is less than 9", () => {
    assert.isBelow(random(4,9), 9);
  });
});