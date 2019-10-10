
"use strict";

let ucFirst = str => {
  if (!str) {
    return "";
  }
  return str[0].toUpperCase() + str.slice(1);
}

describe("Uppercase the first character", () => {
  it("hello -> Hello", () => {
    assert.equal(ucFirst("hello"), "Hello");
  });
  it("'' -> ''", () => {
    assert.equal(ucFirst(""), "");
  });
});