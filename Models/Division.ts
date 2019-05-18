import {OrganisationType, OrganisationUnit} from "./OrganisationUnit";
import {Area} from "./Area";

export class Division extends OrganisationUnit{
    areas: Area[];

    constructor(inputJson: any, parent: OrganisationUnit){
        super(inputJson, parent, OrganisationType.Division);
        this.areas = [];
    }

    createArea(inputJson: any): Area {
        let area = new Area(inputJson, this);
        this.areas.push(area);
        return area;
    }
}
