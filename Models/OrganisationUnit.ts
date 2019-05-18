import {ConfigObject} from "./ConfigObject";

export enum OrganisationType {
    Client,
    Division,
    Area,
    Branch
}

export class OrganisationUnit {
    name: string;
    type: OrganisationType;
    config: ConfigObject | undefined;
    parent: OrganisationUnit | undefined;

    constructor(inputJson: any, _parent: OrganisationUnit | undefined, _type: OrganisationType){
        this.name = inputJson.name;
        this.type = _type;
        this.parent = _parent;
        if (inputJson.config){
            this.config = new ConfigObject(inputJson.config.has_fixed_membership_fee, inputJson.config.fixed_membership_fee_amount);
        }
    }

    createConfig(_has_fixed_membership_fee: boolean, _fixed_membership_fee_amount: number){
        this.config = new ConfigObject(_has_fixed_membership_fee, _fixed_membership_fee_amount);
    }
}
