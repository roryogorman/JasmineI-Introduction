/* Describe a Calculator */
describe("Calculator", function() {
    /* Describe the test we want to perform */
    describe("Addition tests", function() {
        /* Make our assertions */
        it("should return 42", function() {
            /* What we expect */
            expect(addition(20, 22)).toBe(42);
        });
        /* Adding in additional tests - put these in this function here, following the others */
        it("should return 26", function() {
            expect(addition(7, 19)).toBe(26);
        });
    });
});