import {Client} from "./Models/Client";
import {parseClient} from "./Parsers/ClientParser";
import {validateInputForMembership} from "./Logic/Validation";
import {findFixedMembershipFee} from "./Logic/FindFixedMembership";
const MINIMUM_RENT_OFFSET_PER_WEEK: number = 12000; //£120
const VAT_MULTIPLIER: number = 1.2;

export class App {
    clients: Client[];

    constructor(jsonArray: any) {
        this.clients = [];
        jsonArray.data.forEach((clientJsonObject: any) => {
            parseClient(clientJsonObject, this.clients);
        });
        console.log("finished parsing json")
    }

    /***
     *
     * @param rent_amount - The amount of rent in pence/cents
     * @param rent_period - The rent period "week/month"
     * @param organisation_unit - Object representing the organisation unit
     */
    public calculate_membership_fee(rent_amount: number, rent_period: string, organisation_unit: any): number{
        try {
            validateInputForMembership(rent_amount, rent_period, organisation_unit);
        }
        catch (e) {
            console.log("Input is invalid");
            console.log(e);
            //Logic to recover and send back failure
            return -1;
        }

        // If this is fine,
        // 1. Get rent amount
        let membershipFee: number = 0;
        if(rent_amount > MINIMUM_RENT_OFFSET_PER_WEEK) {
            membershipFee = MINIMUM_RENT_OFFSET_PER_WEEK;
        }
        else {
            membershipFee = rent_amount;
        }

        membershipFee = membershipFee * VAT_MULTIPLIER;

        // 2. Go up hierarchy and find the fixed amount
        //  if found, apply new fixed amount and return

        let fixedMembershipFee: number = findFixedMembershipFee(organisation_unit, this.clients);

        if(fixedMembershipFee === 0) {
            console.log("Cannot find fixed membership fee from parents");
        }
        else{
            membershipFee = fixedMembershipFee;
        }
        return membershipFee;
    }
}
