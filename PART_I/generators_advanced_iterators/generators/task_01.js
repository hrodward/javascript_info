
"use strict";

function* pseudoRandom(seed) {
  let val = seed;
  while (true) {
    val *= 16807 % 2147483647;
    yield val;
  }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
