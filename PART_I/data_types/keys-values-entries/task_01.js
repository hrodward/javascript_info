/* eslint-disable no-undef */

"use strict";

let sumSalaries = salaries => {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

describe("Sum the properties", () => {
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  it("sumSalaries(salaries) == 650", () => {
    assert.equal(sumSalaries(salaries), 650);
  });
});