
"use strict";

let truncate = (str, maxLength) => {
  let isLonger = str.length > maxLength;
  str = str.slice(0, maxLength - 1);
  if (isLonger) {
    return str + "~";
  }
  return str;
}

describe("Truncate the text", () => {
  it("Shorten", () => {
    assert.equal(truncate("What I'd like to tell on this topic is:", 20), "What I'd like to te~");
  });
  it("Same", () => {
    assert.equal(truncate("Hi everyone!", 20), "Hi everyone!");
  });

});