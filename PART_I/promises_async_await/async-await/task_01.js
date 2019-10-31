/* eslint-disable no-undef */

"use strict";

async function loadJson(url) {
  let res = await fetch(url);
  return await res.json();
}

loadJson('no-such-user.json') // (3)
  .catch(console.log); // Error: 404