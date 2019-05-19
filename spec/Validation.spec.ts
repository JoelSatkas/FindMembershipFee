import "jasmine";
import * as validation from "../Logic/Validation";
import {getTestModel} from "../TestUtilities";
import {MAXIMUM_RENT_AMOUNT_PER_WEEK, MINIMUM_RENT_AMOUNT_PER_WEEK} from "../Logic/Validation";

let testData: any = getTestModel();
let validationErrors: string[];
let organisationUnitTestName = "Test";

beforeEach(() => {
    validationErrors = [];
});

describe("The validation works for rent amount range: ", () => {
    it("fails for under minimum", () => {
        validationErrors = validation.validateInputForMembership(MINIMUM_RENT_AMOUNT_PER_WEEK - 1, "week", testData.data[0]);
        expect(validationErrors.length).toBe(1, validationErrors.toString());
    });

    it("passes for at minimum", () => {
        validationErrors = validation.validateInputForMembership(MINIMUM_RENT_AMOUNT_PER_WEEK, "week", testData.data[0]);
        expect(validationErrors.length).toBe(0, validationErrors.toString());
    });

    it("fails for over maximum", () => {
        validationErrors = validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK + 1, "week", testData.data[0]);
        expect(validationErrors.length).toBe(1, validationErrors.toString());
    });

    it("passes for at maximum", () => {
        validationErrors = validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK, "week", testData.data[0]);
        expect(validationErrors.length).toBe(0, validationErrors.toString());
    });
});


describe("The validation works for rent period: ", () => {
    it("passes for week", () => {
        validationErrors = validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK, "week", testData.data[0]);
        expect(validationErrors.length).toBe(0, validationErrors.toString());
    });

    it("passes for month", () => {
        validationErrors = validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK, "month", testData.data[0]);
        expect(validationErrors.length).toBe(0, validationErrors.toString());
    });

    it("fails for year", () => {
        validationErrors = validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK, "year", testData.data[0]);
        expect(validationErrors.length).toBe(1, validationErrors.toString());
    });
});

describe("The validation works for organisation unit: ", () => {
    it("passes if it has name", () => {
        validationErrors = validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK, "week", testData.data[0]);
        expect(validationErrors.length).toBe(0, validationErrors.toString());
    });

    it("fails if its missing name", () => {
        testData.data[0].name = undefined;
        validationErrors = validation.validateInputForMembership(MAXIMUM_RENT_AMOUNT_PER_WEEK, "week", testData.data[0]);
        expect(validationErrors.length).toBe(1, validationErrors.toString());
        testData.data[0].name = organisationUnitTestName;
    });
});
