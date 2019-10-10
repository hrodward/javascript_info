
"use strict";

let n1 = +prompt("Insert first number", "");
let n2 = +prompt("Insert second number", "");

if (!isNaN(n1) && !isNaN(n2)) {
  console.log(`Sum is ${n1+n2}`);
}