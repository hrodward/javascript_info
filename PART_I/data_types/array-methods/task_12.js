/* eslint-disable no-undef */

"use strict";

let unique = arr => {
  return arr
    .filter((value, index, array) => !array.slice(0, index).includes(value))
    .join(', ');
}

describe("Filter unique array members", () => {
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  it("Return 'Hare, Krishna, :-O'", () => {
    assert.equal(unique(strings), "Hare, Krishna, :-O");
  });
});