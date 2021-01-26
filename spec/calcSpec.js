/* Describe a Calculator */
describe("Calculator", function() {
    /* Describe the test we want to perform */
    beforeEach(function() {     /*this command resets the value to zero at each function call - prevents aggregation */
        calc = new Calculator;
    });
    describe("Addition tests", function() {
        /* Make our assertions */
        it("should return 42", function() {
            /* What we expect */
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        /* Adding in additional tests - put these in this function here, following the others */
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        /* Defensive Programming - adding test for receiving one number, strings, etc */
        it("should return an error if we don't supply two numbers", function() {
            spyOn(window,"alert");
            calc.add("Hichhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});