/* eslint-disable no-undef */

"use strict";

let topSalary = salaries => {
  let maxSalary = { name: "", salary: -Infinity };
  for (let [name, salary] of Object.entries(salaries)) {
    if (maxSalary.salary < salary) {
      maxSalary = { name, salary };
    }
  }
  return maxSalary.name;
}

describe("The maximal salary", () => {
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  it("topSalary == Pete", () => {
    assert.equal(topSalary(salaries), "Pete");
  });
});