/* eslint-disable no-undef */

"use strict";

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let printListRev = (list) => {
  if (list.next == null) {
    return list.value;
  } else {
    return printListRev(list.next) + "," + list.value;
  }
}

console.log(printListRev(list));