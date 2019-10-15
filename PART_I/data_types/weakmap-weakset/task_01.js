/* eslint-disable no-undef */

"use strict";

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let myWeakSet = new WeakSet();
myWeakSet.add(messages[0]);
myWeakSet.add(messages[1]);
myWeakSet.add(messages[2]);

alert(myWeakSet.has(messages[0]));

