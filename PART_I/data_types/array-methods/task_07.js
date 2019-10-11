/* eslint-disable no-undef */

"use strict";

let toArrayOfNames = arr => {
  return arr.map(value => value.name).join(", ");
}

describe("Map to names", () => {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  let users = [john, pete, mary];
  it("toArrayOfNames(users) == 'John, Pete, Mary'", () => {
    assert.equal(toArrayOfNames(users), "John, Pete, Mary");
  });
});