/* eslint-disable no-undef */

"use strict";

let getAverageAge = users => {
  return users.reduce((previous, current) => previous + current.age, 0) / users.length;
}

describe("Get average age", () => {
  let pete = { name: "Pete", age: 30 };
  let john = { name: "John", age: 25 };
  let mary = { name: "Mary", age: 29 };
  let arr = [pete, john, mary];
  it("John", () => {
    assert.equal(getAverageAge(arr), 28);
  });
});