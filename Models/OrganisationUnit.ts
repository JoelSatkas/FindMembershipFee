import {ConfigObject} from "./ConfigObject";

export class OrganisationUnit {
    name: string;
    type: string;
    config: ConfigObject | undefined;
    parent: OrganisationUnit;

    constructor(inputJson: any, _parent: OrganisationUnit){
        this.name = inputJson.name;
        this.type = inputJson.type;
        this.parent = _parent;
        if (inputJson.config){
            this.config = new ConfigObject(inputJson.config.has_fixed_membership_fee, inputJson.config.fixed_membership_fee_amount);
        }
    }

    createConfig(_has_fixed_membership_fee: boolean, _fixed_membership_fee_amount: number){
        this.config = new ConfigObject(_has_fixed_membership_fee, _fixed_membership_fee_amount);
    }
}
