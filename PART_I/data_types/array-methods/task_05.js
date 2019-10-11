
/* eslint-disable no-undef */

"use strict";

let copySorted = arr => {
  return arr.slice().sort();
}

describe("Copy and sort array", () => {
  let arr = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(arr);
  it("sorted == [CSS, HTML, JavaScript]", () => {
    assert.equal(sorted.toString(), "CSS,HTML,JavaScript");
  });
  it("arr == [HTML,JavaScript,CSS]", () => {
    assert.equal(arr.toString(), "HTML,JavaScript,CSS");
  });
});