import {OrganisationUnit} from "./OrganisationUnit";
import {Branch} from "./Branch";

export class Area extends OrganisationUnit {
    branches: Branch[];

    constructor(inputJson: any, parent: OrganisationUnit){
        super(inputJson, parent);
        this.branches = [];
    }

    createBranch(inputJson: any) {
        this.branches.push(new Branch(inputJson, this));
    }
}