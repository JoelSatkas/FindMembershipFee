export class ConfigObject {

    has_fixed_membership_fee: boolean;
    fixed_membership_fee_amount: number;

    constructor(_has_fixed_membership_fee: boolean, _fixed_membership_fee_amount: number){
        this.has_fixed_membership_fee = _has_fixed_membership_fee;
        this.fixed_membership_fee_amount = _fixed_membership_fee_amount;
    };
}
