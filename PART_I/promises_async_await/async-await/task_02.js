/* eslint-disable no-undef */

"use strict";

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let res = await fetch(url);
  if (res.status == 200) {
    return await res.json();
  } else {
    throw new HttpError(res);
  }
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  let user;
  while (!user) {
    try {
      let name = prompt("Enter a name?", "iliakan");
      user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Full name: ${user.name}.`);
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
      } else {
        throw err;
      }
    }
  }
}

demoGithubUser();