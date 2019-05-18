import * as fs from 'fs';
import {App} from "./app";

function runApp() {
    let rawData: any = fs.readFileSync("./Data/InstanceData.json");
    let jsonData: any = JSON.parse(rawData);

    let appInstance: App = new App(jsonData);


    console.log(jsonData);
}

runApp();
