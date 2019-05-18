import "jasmine";
import * as testClass from "../Logic/FindFixedMembership";
import {getInstanceModel, getTestModel} from "../TestUtilities";
import {Client} from "../Models/Client";

describe("FindFixedMembership should", () => {

    let instanceData: Client[] = getInstanceModel();
    let testData: any = getTestModel();
    let expectedResults: number[] = [0, 0, 35000, 45000, 0, 45000, 35000, 45000, 45000, 45000, 45000, 0, 0, 0, 0, 45000, 45000, 25000, 45000, 35000, 35000, 35000, 35000];

    it("find all correct memberships", () => {
        let result;
        expect(expectedResults.length).toBe(testData.data.length, "Expected lengths to be the same size");
        testData.data.forEach((testInstanceJson: any, index: number) => {
            result = testClass.findFixedMembershipFee(testInstanceJson, instanceData);
            expect(result).toBe(expectedResults[index], "Name: " + testInstanceJson.name + " Index: " + index);
        });
    });

    //TODO feed incorrect data and make sure it handles correctly.
});
