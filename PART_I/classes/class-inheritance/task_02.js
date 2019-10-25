
"use strict";

class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

alert ( Object.prototype.hasOwnProperty.call(rabbit, "name") ); // true