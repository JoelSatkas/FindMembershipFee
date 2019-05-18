import * as fs from 'fs';
import {Client} from "./Models/Client";
import {parseClient} from "./Parsers/ClientParser";

export function getInstanceModel(): Client[] {
    let jsonData: any = readJsonFileFromDisk("./Data/InstanceData.json");
    let clients: Client[] = [];

    jsonData.data.forEach((clientJsonObject: any) => {
        parseClient(clientJsonObject, clients);
    });

    return clients;
}

export function getTestModel(): any {
    return readJsonFileFromDisk("./Data/TestData.json");

}

function readJsonFileFromDisk(filePath: string): any {
    let rawData: any = fs.readFileSync(filePath);
    return JSON.parse(rawData);
}
