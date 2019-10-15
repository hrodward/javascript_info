
"use strict";

let checkSpam = str => {
  let lower = str.toLowerCase();
  return lower.includes("viagra") || lower.includes("xxx");
}

describe("Check for spam", () => {
  it("buy ViAgRA now => true", () => {
    assert.isTrue(checkSpam("buy ViAgRA now"));
  });
  it("free xxxxx => true", () => {
    assert.isTrue(checkSpam("free xxxxx"));
  });
  it("innocent rabbit => false", () => {
    assert.isFalse(checkSpam("innocent rabbit"));
  });
});