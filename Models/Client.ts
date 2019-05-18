import {OrganisationType, OrganisationUnit} from "./OrganisationUnit";
import {Division} from "./Division";

export class Client extends OrganisationUnit{
    divisions: Division[];

    constructor(inputJson: any){
        super(inputJson, undefined, OrganisationType.Client);
        this.divisions = [];
    }

    createDivision(inputJson: any): Division {
        let division = new Division(inputJson, this);
        this.divisions.push(division);
        return division;
    }
}
