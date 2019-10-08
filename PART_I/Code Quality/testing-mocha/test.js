
before(() => console.log("Testing started - before all tests"));
after(() => console.log("Testing finished - after all tests"));

beforeEach(() => console.log("Before a test - enter a test"));
afterEach(() => console.log("After a test - exit a test"));

describe("pow", () => {

    describe("Raises x to power 3", () => {
        let makeTest = x => {
            let expected = x ** 3;
            it(`${x} in the power 3 is ${expected}`, () => {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });

    describe("NaN", () => {
        it("2 in the power of -1 is NaN", () => {
            assert.isNaN(pow(2, -1));
        });
        it("for non-integer n the result is NaN", () => {
            assert.isNaN(pow(2, 1.5));
        });
    });


});
