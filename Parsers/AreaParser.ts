import {Division} from "../Models/Division";
import {parseBranch} from "./BranchParser";

export function parseArea(areaJsonObject: any, divisionReference: Division) {
    let area = divisionReference.createArea(areaJsonObject);
    areaJsonObject.branches.forEach((branchJsonObject: any) => {
        parseBranch(branchJsonObject, area);
    });
}
