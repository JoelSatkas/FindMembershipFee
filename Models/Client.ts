import {OrganisationUnit} from "./OrganisationUnit";
import {Division} from "./Division";

export class Client extends OrganisationUnit{
    divisions: Division[];

    constructor(inputJson: any, parent: OrganisationUnit){
        super(inputJson, parent);
        this.divisions = [];
    }

    createDivision(inputJson: any){
        this.divisions.push(new Division(inputJson, this));
    }
}
