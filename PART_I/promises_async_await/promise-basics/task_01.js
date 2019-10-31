/* eslint-disable no-undef */

"use strict";

function delay(ms) {
  return new Promise( resolve => {
    let start = Date.now();
    while (Date.now() - start < ms) {
      null;
    }
    resolve("done");
  })
}

delay(3000).then(() => console.log('runs after 3 seconds'));