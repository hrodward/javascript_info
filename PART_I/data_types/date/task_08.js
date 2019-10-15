/* eslint-disable no-undef */

"use strict";

let formatDate = date => {
  let now = new Date();
  let diffInSec = (now - date) / 1000;
  if (diffInSec < 1) {
    return "right now";
  } else if (diffInSec < 60) {
    return Math.round(diffInSec) + " sec. ago";
  } else if (diffInSec < 3600) {
    return Math.round(diffInSec / 60) + " min. ago";
  }
  // "DD.MM.YY HH:mm"
  let year = now.getFullYear().toString().slice(-2);
  let month = ("0" + now.getMonth()).slice(-2);
  let day = ("0" + now.getDate()).slice(-2);
  let formattedNow = `${day}.${month}.${year} ${now.getHours()}:${now.getMinutes()}`;
  return formattedNow;
}

describe("Format the relative date", () => {
  it("formatDate(new Date(new Date - 1)) == right now", () => {
    assert.equal(formatDate(new Date(new Date - 1)), "right now");
  });
  it("formatDate(new Date(new Date - 30 * 1000)) == 30 sec. ago", () => {
    assert.equal(formatDate(new Date(new Date - 30 * 1000)), "30 sec. ago");
  });
  it("formatDate(new Date(new Date - 5 * 60 * 1000)) == 5 min. ago", () => {
    assert.equal(formatDate(new Date(new Date - 5 * 60 * 1000)), "5 min. ago");
  });

});

console.log("The formatted date = " + (formatDate(new Date(new Date - 86400 * 1000))));
