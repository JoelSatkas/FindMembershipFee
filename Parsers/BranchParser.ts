import {Area} from "../Models/Area";

export function parseBranch(branchJsonObject: any, areaReference: Area) {
    areaReference.createBranch(branchJsonObject);
}
