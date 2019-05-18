import {OrganisationType, OrganisationUnit} from "./OrganisationUnit";
import {Division} from "./Division";

export class Client extends OrganisationUnit{
    divisions: Division[];

    constructor(inputJson: any){
        super(inputJson, undefined, OrganisationType.Client);
        this.divisions = [];
    }

    createDivision(inputJson: any){
        this.divisions.push(new Division(inputJson, this));
    }

    parseJson(inputJson: any) {

    }
}
