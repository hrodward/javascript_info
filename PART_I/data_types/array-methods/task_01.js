
/* eslint-disable no-undef */

"use strict";

let camelize = str => {
  return str
    .split('-')
    .reduce((previous, current) => {
      let next = current ? current[0].toUpperCase() + current.slice(1) : "";
      return previous + next;
    });
}

describe("Translate border-left-width to borderLeftWidth", () => {
  it("camelize('background-color') == 'backgroundColor'", () => {
    assert.equal(camelize("background-color"), 'backgroundColor');
  });
  it("camelize('list-style-image') == 'listStyleImage'", () => {
    assert.equal(camelize("list-style-image"), 'listStyleImage');
  });
  it("camelize('-webkit-transition') == 'WebkitTransition'", () => {
    assert.equal(camelize("-webkit-transition"), 'WebkitTransition');
  });
  it("camelize('') == ''", () => {
    assert.equal(camelize(""), '');
  });
  it("camelize('-') == ''", () => {
    assert.equal(camelize("-"), '');
  });
});