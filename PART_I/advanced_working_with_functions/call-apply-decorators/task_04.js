/* eslint-disable no-undef */

"use strict";

let throttle = (f, ms) => {
  let lastArgs = [];
  let inUse = false;
  let wrapper = (...args) => {
    if (!inUse) {
      inUse = true;
      f.apply(this, args); // So we run the first time immediately
      let timerId = setInterval(() => {
        if (lastArgs != args) {
          f.apply(this, lastArgs);
          lastArgs = args; // <-- This will be our stopping signal
        } else {
          clearInterval(timerId);
          inUse = false;
        }
      }, ms);
    }
    lastArgs = args;
  }
  return wrapper;
}

// let throttle = (f, ms) => {
//   let lastArgs = [];
//   let start = Date.now();
//   let inUse = false;
//   let wrapper = (...args) => {
//     console.log((Date.now() - start) + " - Incoming: args=" + args);
//     if (!inUse) {
//       console.log((Date.now() - start) + " -   GO: args=" + args);
//       console.log((Date.now() - start) + " -   | previous lastArgs=" + lastArgs);
//       console.log((Date.now() - start) + " -   | new lastArgs=" + lastArgs);
//       inUse = true;
//       f.apply(this, args);
//       let timerId = setInterval(() => {
//         console.log((Date.now() - start) + " - comparing args=" + args + " vs lastArgs=" + lastArgs);
//         if (lastArgs != args) {
//           console.log((Date.now() - start) + " - RECUP lastArgs=" + lastArgs);
//           f.apply(this, lastArgs);
//           lastArgs = args; // <-- This will be our stopping signal
//         } else {
//           console.log((Date.now() - start) + " - STOPPING INTERVAL - lastArgs=" + lastArgs);
//           clearInterval(timerId);
//           inUse = false;
//         }
//       }, ms);
//     }
//     console.log((Date.now() - start) + " -   previous lastArgs=" + lastArgs);
//     lastArgs = args;
//     console.log((Date.now() - start) + " -   new lastArgs=" + lastArgs);
//   }
//   return wrapper;
// }

function f(a) {
  console.log(a);
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)
f1000(4); // (throttling, 1000ms not out yet)

setTimeout(() => f1000(5), 100); // ignored ( only 100 ms passed )
setTimeout(() => f1000(6), 1100); // doesnt run
setTimeout(() => f1000(7), 1101); // ignored (less than 1000 ms from the last run)
setTimeout(() => f1000(8), 2101); // runs
setTimeout(() => f1000(9), 2102); // runs later
setTimeout(() => f1000(10), 5000); // runs later
setTimeout(() => f1000(11), 5001); // runs later

// Output: 1, 5, 6, 8, 9, 10, 11