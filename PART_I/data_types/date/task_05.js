/* eslint-disable no-undef */

"use strict";

let getLastDayOfMonth = (year, month) => {
  let theDate = new Date(year, month + 1); // adding ", 0" for the day automatically subtracts 1 (as it's 1-based)
  theDate.setDate(theDate.getDate() - 1);
  return theDate.getDate();
}

describe("Last day of month?", () => {
  it("getLastDayOfMonth(2012, 1) == 29", () => {
    assert.equal(getLastDayOfMonth(2012, 1), 29);
  });
});