/* eslint-disable no-undef */

"use strict";

function Calculator() {

  this.methods = [];

  this.addMethod = (name, func) => {
    this.methods.push([name, func]);
  };

  this.calculate = str => {
    let arr = str.split(" ");
    let result;
    let nextFunc;
    arr.forEach(element => {
      if (isNaN(element)) {
        nextFunc = this.methods.find(value => value[0] === element);
      } else {
        if (!nextFunc) {
          result = +element; // assign first value
        } else {
          result = nextFunc[1](result, +element);
        }
      }
    });
    return result;
  }
}

describe("Create an extendable calculator", () => {

  let powerCalc = new Calculator;
  powerCalc.addMethod("+", (a, b) => a + b);
  powerCalc.addMethod("-", (a, b) => a - b);
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);

  it("calculate('1 + 2') == 3", () => {
    assert.equal(powerCalc.calculate("1 + 2"), 3);
  });
  it("calculate('1 - 2') == -1", () => {
    assert.equal(powerCalc.calculate("1 - 2"), -1);
  });
  it("calculate('1 + 2 - 5') == -2", () => {
    assert.equal(powerCalc.calculate("1 + 2 - 5"), -2);
  });
  it("calculate('2 ** 3') == 8", () => {
    assert.equal(powerCalc.calculate("2 ** 3"), 8);
  });
  it("calculate('10 / 5') == 2", () => {
    assert.equal(powerCalc.calculate("10 / 5"), 2);
  });
  it("calculate('10 * 5') == 50", () => {
    assert.equal(powerCalc.calculate("10 * 5"), 50);
  });
  it("calculate('10 + 5 - 7 * 3 / 8 ** 2') == 9", () => {
    assert.equal(powerCalc.calculate("10 + 5 - 7 * 3 / 8 ** 2"), 9);
  });
});