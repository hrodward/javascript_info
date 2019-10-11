/* eslint-disable no-undef */

"use strict";

let mapUsersToObjects = arr => {
  let sol = [];
  arr.forEach(element => sol.push({ fullName: (element.name + ' ' + element.surname), id: element.id }));
  return sol;
}

describe("Map to objects", () => {
  let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };
  let users = [john, pete, mary];
  let usersMapped = mapUsersToObjects(users);
  it("usersMapped[0].id === 1", () => {
    assert.equal(usersMapped[0].id, 1);
  });
  it("usersMapped[0].fullName === 'John Smith'", () => {
    assert.equal(usersMapped[0].fullName, "John Smith");
  });
});