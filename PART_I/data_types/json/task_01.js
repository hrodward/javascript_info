/* eslint-disable no-undef */

"use strict";

let user = {
  name: "John Smith",
  age: 35
};

let userJSON = JSON.stringify(user, (key, value) => value, 0);

console.log(userJSON);

let userParsed = JSON.parse(userJSON);

console.log(userParsed);