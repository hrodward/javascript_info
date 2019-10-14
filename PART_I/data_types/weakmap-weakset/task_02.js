/* eslint-disable no-undef */

"use strict";

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let wm = new WeakMap();
wm.set(messages[0], new Date());
wm.set(messages[1], new Date());
wm.set(messages[2], new Date());

alert(wm.get(messages[0]));

