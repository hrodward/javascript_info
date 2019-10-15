/* eslint-disable no-undef */

"use strict";

let count = user => {
  return Object.keys(user).length;
}

describe("Count properties", () => {
  let user = {
    name: 'John',
    age: 30
  };
  it("count(user) == 2", () => {
    assert.equal(count(user), 2);
  });
});