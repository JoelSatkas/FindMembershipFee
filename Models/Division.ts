import {OrganisationType, OrganisationUnit} from "./OrganisationUnit";
import {Area} from "./Area";

export class Division extends OrganisationUnit{
    areas: Area[];

    constructor(inputJson: any, parent: OrganisationUnit){
        super(inputJson, parent, OrganisationType.Division);
        this.areas = [];
    }

    createArea(inputJson: any){
        this.areas.push(new Area(inputJson, this));
    }
}
