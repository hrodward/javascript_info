
"use strict";

let arr = [];

console.log("Populating array");
for (let counter = 0; counter < 10000000; counter++) {
  arr.push("fruit" + counter);
}
console.log("Looping with 'in' and 'of'");
let startTime = new Date();
for (let key in arr) {
  null; // 5300 - 5700 ms
}
let partTime1 = new Date();
for (let fruit of arr) {
  null; // 120 - 140 ms
}
let partTime2 = new Date();
for (let i = 0; i < arr.length; i++) {
  null; // 70 - 120 ms
}
let endTime = new Date();
console.log("Time 'in': " + (partTime1 - startTime) + "ms");
console.log("Time 'of': " + (partTime2 - partTime1) + "ms");
console.log("Time classic loop: " + (endTime - partTime2) + "ms");