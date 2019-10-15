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

let printList = (list) => {
  if (list.next == null) {
    return list.value;
  } else {
    return list.value + "," + printList(list.next);
  }
}

console.log(printList(list));