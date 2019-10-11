/* eslint-disable no-undef */

"use strict";

let sortByAge = arr => {
  arr.sort((a, b) => a.age - b.age);
}

describe("Sort users by age", () => {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  let arr = [pete, john, mary];
  sortByAge(arr);
  // now: [john, mary, pete]
  it("John", () => {
    assert.equal(arr[0].name, "John");
  });
  it("Mary", () => {
    assert.equal(arr[1].name, "Mary");
  });
  it("Pete", () => {
    assert.equal(arr[2].name, "Pete");
  });
});