/* eslint-disable no-undef */

"use strict";

console.log("beginning");
function makeArmy() {
  let shooters = [];
  console.log("in makeArmy");
  let i = 0;
  while (i < 10) {
    console.log("  i=" + i);
    let x = i; // <---------------------- THE FIX
    let shooter = function () { // shooter function
      console.log(x); // <------ FIX USED HERE
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}
console.log("after makeArmy");
let army = makeArmy();
console.log("after army");
army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...
