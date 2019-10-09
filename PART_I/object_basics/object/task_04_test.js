"use strict";

describe("Test multiplyNumeric", () => {
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };
    it("This should return 400 and 600", () => {
        multiplyNumeric(menu);
        assert.equal(menu.width, 400);
        assert.equal(menu.height, 600);
    });
    it("This should return undefined", () => {
        let returnedValue = multiplyNumeric(menu);
        assert.isUndefined(returnedValue);
    });
});