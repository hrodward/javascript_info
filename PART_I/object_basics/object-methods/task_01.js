
"use strict";

let calculator = {
    value1: null,
    value2: null,
    read(val1, val2) {
        this.value1 = val1;
        this.value2 = val2;
    },
    sum() {
        return +this.value1 + +this.value2;
    },
    mul() {
        return this.value1 * this.value2;
    }
};

describe("Calculator tests", () => {
    calculator.read(2, 3);
    it("Test sum(2,3) should return 5", () => {
        assert.equal(calculator.sum(), 5);
    });
    it("Test mul(2,3) should return 6", () => {
        assert.equal(calculator.mul(), 6);
    });
});
