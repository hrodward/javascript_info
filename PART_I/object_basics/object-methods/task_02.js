
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
  }
};

describe("Ladder tests", () => {
  it("Chained calls should work and showStep return 1", () => {
    assert.equal(ladder.up().up().down().showStep(), 1);
  });
});
