
"use strict";

let random = (min, max) => {
  let range = max - min;
  return Math.trunc(Math.random() * range + min);
}

describe("Random in Max Min with integer", () => {
  for (let i = 0; i < 100; i++) {
    let rnd = random(4, 9);
    it("random(4,9) returns an integer", () => {
      assert.equal(rnd, Math.round(rnd));
    });
    it("random(4,9) is greater or equal to 4", () => {
      assert.isAtLeast(rnd, 4);
    });
    it("random(4,9) is less than or equal to 9", () => {
      assert.isAtMost(rnd, 9);
    });
  }
});