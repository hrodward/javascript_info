/* eslint-disable no-undef */

"use strict";

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

// Both work
// askPassword(() => user.login(true), () => user.login(false));
askPassword(user.login.bind(user, true), user.login.bind(user, false));


// describe("Fix a function that loses 'this'", () => {
//   it("sum(1)(2) = 3", () => {
//     assert.equal(sum(1)(2), 3);
//   });
//   it("sum(5)(-1) = 4", () => {
//     assert.equal(sum(5)(-1), 4);
//   });

// });
