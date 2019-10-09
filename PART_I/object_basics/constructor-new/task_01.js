
"use strict";
let obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

let a = new A;
let b = new B;

alert(a == b); // true

// describe("Ladder tests", () => {
//   it("Chained calls should work and showStep return 1", () => {
//     assert.equal(ladder.up().up().down().showStep(), 1);
//   });
//   it("toPrimitive with hint default should return 3", () => {
//     assert.equal(ladder + 2, 3);
//   });
//   it("toPrimitive with hint number should return 5", () => {
//     assert.equal(ladder * 5, 5);
//   });
// });
