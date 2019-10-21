/* eslint-disable no-undef */

"use strict";

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


// describe("Fix a function that loses 'this'", () => {
//   it("sum(1)(2) = 3", () => {
//     assert.equal(sum(1)(2), 3);
//   });
//   it("sum(5)(-1) = 4", () => {
//     assert.equal(sum(5)(-1), 4);
//   });

// });
