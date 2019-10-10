
"use strict";

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // shows the current step
    return this.step;
  },
  [Symbol.toPrimitive](hint) {
    console.log(hint);
    return hint === "string" ? "hello" : this.showStep();
  }
};

alert(ladder); // <-- this uses hint 'string'

describe("Ladder tests", () => {
  it("Chained calls should work and showStep return 1", () => {
    assert.equal(ladder.up().up().down().showStep(), 1);
  });
  it("toPrimitive with hint default should return 3", () => {
    assert.equal(ladder + 2, 3);
  });
  it("toPrimitive with hint number should return 5", () => {
    assert.equal(ladder * 5, 5);
  });
});
