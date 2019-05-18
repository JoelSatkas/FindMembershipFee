import {Area} from "../Models/Area";
import {Branch} from "../Models/Branch";

export function parseBranch(branchJsonObject: any, areaReference: Area) {
    let branch = new Branch(branchJsonObject, areaReference);
    areaReference.branches.push(branch);
}
