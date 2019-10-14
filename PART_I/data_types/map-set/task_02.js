/* eslint-disable no-undef */

"use strict";

let aclean = arr => {
  let myMap = new Map();
  arr.forEach(x => {
    myMap.set(Array.from(x.toLowerCase()).sort().join(""), x );
  });
  return Array.from(myMap.values()).join(", ");
}

describe("Filter anagrams", () => {
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  it("Return 'nap, teachers, ear'", () => {
    assert.equal(aclean(arr), "PAN, hectares, era");
  });
});