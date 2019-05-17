import {OrganisationUnit} from "./OrganisationUnit";

export class Branch extends OrganisationUnit{

    constructor(inputJson: any, parent: OrganisationUnit){
        super(inputJson, parent);
    }
}
