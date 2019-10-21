/* eslint-disable no-undef */

"use strict";

let byField = fieldName => {
  return function (a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  }
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

let toto = users.sort(byField('age'));
console.log(toto); // <-- the toto reference to users remains, but the sorting of users will now change
let titi = users.sort(byField('name')); // <-- users is sorted by name
console.log(titi); // <-- titi and toto point to the same users array sorted by name
