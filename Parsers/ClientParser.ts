import {Client} from "../Models/Client";
import {parseDivision} from "./DivisionParser";

export function parseClient(clientJsonObject: any, clientReference: Client[]) {
    let client = new Client(clientJsonObject);
    clientReference.push(client);
    clientJsonObject.divisions.forEach((divisionJsonArea: any) => {
        parseDivision(divisionJsonArea, client);
    });
}
