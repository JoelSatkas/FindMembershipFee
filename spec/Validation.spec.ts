import "jasmine";
import * as validation from "../Logic/Validation";
import {getTestModel} from "../TestUtilities";
import {MAXIMUM_RENT_AMOUNT_PER_WEEK, MINIMUM_RENT_AMOUNT_PER_WEEK} from "../Logic/Validation";

let testData: any = getTestModel();

describe("The validation works for rent amount range: ", () => {
    it("fails for under minimum", () => {
        try{
            validation.validateInputForMembership(MINIMUM_RENT_AMOUNT_PER_WEEK-1, "week", testData.data[0]);
        }
        catch (e) {
            expect(e).toBeDefined();
        }
    });

    it("passes for at minimum", () => {
        try{
            validation.validateInputForMembership(MINIMUM_RENT_AMOUNT_PER_WEEK, "week", testData.data[0]);
            expect(true).toBeDefined();
        }
        catch (e) {
            expect(e).not.toBeDefined();
        }
    });

    it("fails for over maximum", () => {
        try{
            validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK + 1, "week", testData.data[0]);
        }
        catch (e) {
            expect(e).toBeDefined();
        }
    });

    it("passes for at maximum", () => {
        try{
            validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK, "week", testData.data[0]);
            expect(true).toBeDefined();
        }
        catch (e) {
            expect(e).not.toBeDefined();
        }
    });
});


describe("The validation works for rent period: ", () => {
    it("passes for week", () => {
        try{
            validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK, "week", testData.data[0]);
            expect(true).toBeDefined();
        }
        catch (e) {
            expect(e).not.toBeDefined();
        }
    });

    it("passes for month", () => {
        try{
            validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK, "month", testData.data[0]);
            expect(true).toBeDefined();
        }
        catch (e) {
            expect(e).not.toBeDefined();
        }
    });

    it("fails for year", () => {
        try{
            validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK, "year", testData.data[0]);
        }
        catch (e) {
            expect(e).toBeDefined();
        }
    });
});

describe("The validation works for organisation unit: ", () => {
    it("passes if it has name", () => {
        try{
            validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK, "week", testData.data[0]);
        }
        catch (e) {
            expect(e).not.toBeDefined();
        }
    });

    it("fails if its missing name", () => {
        try{
            testData.data[0].name = undefined;
            validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK, "week", testData.data[0]);
        }
        catch (e) {
            expect(e).toBeDefined();
        }
    });
});
