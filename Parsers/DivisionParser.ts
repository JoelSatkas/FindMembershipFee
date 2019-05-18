import {Client} from "../Models/Client";
import {Division} from "../Models/Division";
import {parseArea} from "./AreaParser";

export function parseDivision(divisionJsonObject: any, clientReference: Client) {
    let division = clientReference.createDivision(divisionJsonObject);
    divisionJsonObject.areas.forEach((areaJsonObject: any) => {
        parseArea(areaJsonObject, division);
    });
}
