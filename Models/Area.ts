import {OrganisationType, OrganisationUnit} from "./OrganisationUnit";
import {Branch} from "./Branch";

export class Area extends OrganisationUnit {
    branches: Branch[];

    constructor(inputJson: any, parent: OrganisationUnit){
        super(inputJson, parent, OrganisationType.Area);
        this.branches = [];
    }

    createBranch(inputJson: any) {
        let branch = new Branch(inputJson, this);
        this.branches.push(branch);
        return branch;
    }
}
