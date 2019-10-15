/* eslint-disable no-undef */

"use strict";

let getLocalDay = date => {
  let day = date.getDay();
  return day == 0 ? 7 : day;
}

describe("European weekday", () => {
  it("getLocalDay == 2", () => {
    let date = new Date(2019, 9, 15);  // tuesday
    assert.equal(getLocalDay(date), 2);
  });
  it("getLocalDay == 7", () => {
    let date = new Date(2019, 9, 20);  // sunday
    assert.equal(getLocalDay(date), 7);
  });
});