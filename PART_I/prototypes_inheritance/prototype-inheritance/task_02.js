/* eslint-disable no-undef */

"use strict";

let hamster = {

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple

describe("Why are both hamsters full?", () => {
  it("Speedy", () => {
    assert.include(speedy.stomach, "apple");
  });
  it("Lazy", () => {
    assert.notInclude(lazy.stomach, "apple");
  });
});