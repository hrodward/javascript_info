
"use strict";

function Calculator() {
  this.value1 = null;
  this.value2 = null;
  
  this.read = (val1, val2) => {
    this.value1 = val1;
    this.value2 = val2;
  }

  this.sum = () => {
    return +this.value1 + +this.value2;
  }

  this.mul = () => {
    return this.value1 * this.value2;
  }
}

describe("Calculator tests", () => {
  let calc = new Calculator();
  calc.read(2, 3);
  it("Test sum(2,3) should return 5", () => {
    assert.equal(calc.sum(), 5);
  });
  it("Test mul(2,3) should return 6", () => {
    assert.equal(calc.mul(), 6);
  });
});
