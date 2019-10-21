/* eslint-disable no-undef */

"use strict";

let slow = (x, y) => {
  // console.log("  slow.args: x=" + x + ", y=" + y);
  for (let i = 0; i < 2500000000;) {
    i++;
  }
  // setTimeout(() => console.log('Done'), x * 1000);
  let res = x * y;
  // console.log("  slow.res=" + res);
  return res;
}

let cacheDecorator = (myFunc) => {
  let cache = new Map();
  let deco = (...args) => {
    // console.log("  args=" + args);
    let key = hash(args);
    // console.log("  key=" + key);
    if (cache.has(key)) {
      // console.log("  HIT");
      return cache.get(key);
    }
    // console.log("  NO hit");
    let result = myFunc.apply(this, args);
    cache.set(key, result);
    return result;
  }
  return deco;
}

let hash = (args) => {
  // console.log("    hash.args=" + args);
  let ret = [].join.call(args);
  // console.log("    hash.ret=" + ret);
  return ret;
}

slow = cacheDecorator(slow);

console.log("RES 1 = " + slow(3, 5) + " time=" + new Date());
console.log("RES 2 = " + slow(3, 7) + " time=" + new Date());
// console.log("RES 3 = " + slow(3, 9));
// console.log("RES 4 = " + slow(3, 11));
console.log("RES 1 = " + slow(3, 5) + " time=" + new Date());
