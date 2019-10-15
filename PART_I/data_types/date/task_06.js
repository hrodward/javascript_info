/* eslint-disable no-undef */

"use strict";

let getSecondsToday = () => {
  let theDate = new Date();
  let toZero = new Date(theDate.getFullYear(), theDate.getMonth(), theDate.getDate());
  return Math.round((Date.now() - toZero) / 1000);
}

console.log("seconds till now: " + getSecondsToday());
