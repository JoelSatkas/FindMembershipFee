import * as fs from 'fs';
import {App} from "./app";

function runApp() {
    let rawData: any = fs.readFileSync("./Data/InstanceData.json");
    let jsonData: any = JSON.parse(rawData);

    let appInstance: App = new App(jsonData);
    /*
        TODO: Run tests against the function.
     */

    console.log(jsonData);
}

runApp();
