import {Client} from "./Models/Client";
import {parseClient} from "./Parsers/ClientParser";

export class App {
    clients: Client[];

    constructor(jsonArray: any) {
        this.clients = [];

        jsonArray.data.forEach((clientJsonObject: any) => {
            parseClient(clientJsonObject, this.clients);
        });

        console.log("finished parsing json")
    }

    public calculate_membership_fee(rent_amount: number, rent_period: string, organisation_unit: any){
        throw "TODO implement"
    }
}
