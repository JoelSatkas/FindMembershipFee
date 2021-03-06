import {Client} from "./Models/Client";
import {parseClient} from "./Parsers/ClientParser";
import {validateInputForMembership} from "./Logic/Validation";
import {findFixedMembershipFee} from "./Logic/FindFixedMembership";
const MINIMUM_RENT_OFFSET_PER_WEEK: number = 12000; //£120
const VAT_MULTIPLIER: number = 1.2;

export class App {
    clients: Client[];

    /***
     * The constructor for this class. Takes in the instance data to be parsed into models
     * @param jsonArray - The instance dat to be parsed
     */
    constructor(jsonArray: any) {
        this.clients = [];
        jsonArray.data.forEach((clientJsonObject: any) => {
            parseClient(clientJsonObject, this.clients);
        });
        console.log("finished parsing json")
    }

    /***
     * The main function.
     * @param rent_amount - The amount of rent in pence/cents
     * @param rent_period - The rent period "week/month"
     * @param organisation_unit - Object representing the organisation unit
     */
    public calculate_membership_fee(rent_amount: number, rent_period: string, organisation_unit: any): number{
        //Step 1: validate input
        let validationErrors: string[] = validateInputForMembership(rent_amount, rent_period, organisation_unit);
        if(validationErrors.length > 0){
            console.log("Input is invalid");
            console.log(validationErrors.toString());
            //Logic to recover and send back failure
            return -1;
        }

        //Step 2. Go up hierarchy and find the fixed amount
        //  if found, apply new fixed amount and return
        let membershipFee: number;
        let fixedMembershipFee: number = findFixedMembershipFee(organisation_unit, this.clients);

        if(fixedMembershipFee === 0) {
            console.log("Cannot find fixed membership fee from parents");
            //Step 3. Get rent amount
            membershipFee = rent_amount > MINIMUM_RENT_OFFSET_PER_WEEK ? rent_amount : MINIMUM_RENT_OFFSET_PER_WEEK;
            // VAT
            membershipFee = membershipFee * VAT_MULTIPLIER;
        }
        else{
            // Does this need VAT?
            membershipFee = fixedMembershipFee;
        }
        return membershipFee;
    }
}
