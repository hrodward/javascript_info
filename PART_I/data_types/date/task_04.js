/* eslint-disable no-undef */

"use strict";

const MS_IN_A_DAY = 24 * 3600 * 1000;

let getDateAgo = (date, days) => {
  let past = new Date(+date - days * MS_IN_A_DAY); // past.setDate(date.getDate()-days) is more elegant
  return past.getDate();
}

describe("Which day of month was many days ago?", () => {
  let date = new Date(2015, 0, 2);
  it("getDateAgo == 1", () => {
    assert.equal(getDateAgo(date, 1), 1);
  });
  it("getDateAgo == 31", () => {
    assert.equal(getDateAgo(date, 2), 31);
  });
  it("getDateAgo == 2", () => {
    assert.equal(getDateAgo(date, 365), 2);
  });
});