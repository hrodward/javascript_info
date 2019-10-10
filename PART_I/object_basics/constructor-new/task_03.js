
"use strict";

function Accumulator(startingValue) {
  this.currentValue = startingValue;
  this.read = () => {
    this.currentValue++;
  }
}

describe("Calculator tests", () => {
  it("After two reads it returns 3", () => {
    let accumulator = new Accumulator(1); // initial value 1
    accumulator.read(); // adds the user-entered value
    accumulator.read(); // adds the user-entered value
    assert.equal(accumulator.currentValue, 3);
  });
  it("After 0 reads returns 1", () => {
    let accumulator = new Accumulator(1); // initial value 1
    assert.equal(accumulator.currentValue, 1);
  });
});
