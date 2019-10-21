/* eslint-disable no-undef */

"use strict";

let user = {
  name: "John",
  age: 35,
  toString() {
    return name + " is " + age + " years old"
  }
}

Object.defineProperty(user, "toString", {enumerable : false});

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

for (let key in clone) console.log(key);
console.log(clone);
