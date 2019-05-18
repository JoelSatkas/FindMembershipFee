import {Client} from "./Models/Client";
import {parseClient} from "./Parsers/ClientParser";
import {validateInputForMembership} from "./Logic/Validation";

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
        // 2. Go up hiearchy and find the fixed amount
        //  if found, apply new fixed amount and return

        throw "TODO implement"
    }
}
