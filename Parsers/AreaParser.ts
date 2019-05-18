import {Division} from "../Models/Division";
import {Area} from "../Models/Area";
import {parseBranch} from "./BranchParser";

export function parseArea(areaJsonObject: any, divisionReference: Division) {
    let area = new Area(areaJsonObject, divisionReference);
    divisionReference.areas.push(area);
    area.branches.forEach((branchJsonObject: any) => {
        parseBranch(branchJsonObject, area);
    });
}
