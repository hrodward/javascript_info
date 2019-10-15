
"use strict";

let extractCurrencyValue = str => {
  return parseFloat(str.slice(1));
}

describe("Extract the money", () => {
  it("$120 => 120", () => {
    assert.equal(extractCurrencyValue('$120'), 120);
  });

});