/* eslint-disable no-undef */

"use strict";

let shuffle = arr => {
  arr.sort(() => Math.random() * 2 - 1);
}

let arr = [1, 2, 3, 4, 5];
shuffle(arr);
console.log(arr);

