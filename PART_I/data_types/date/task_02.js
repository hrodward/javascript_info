/* eslint-disable no-undef */

"use strict";

let getWeekDay = date => {
  let weekday = date.getDay();
  switch (weekday) {
    case 0: return "SU";
    case 1: return "MO";
    case 2: return "TU";
    case 3: return "WE";
    case 4: return "TH";
    case 5: return "FR"; // <-- this should be an array!!!!!
    case 6: return "SA"; //   |-> let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  }
}

describe("Show a weekday", () => {
  let date = new Date(2012, 0, 3);  // 3 Jan 2012
  it("getWeekDay == TU", () => {
    assert.equal(getWeekDay(date), "TU");
  });
});