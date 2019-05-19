import * as fs from 'fs';
import {App} from "./app";

/***
 * The method from which we can run the main app and test its output.
 */
function runApp() {
    let rawData: any = fs.readFileSync("./Data/InstanceData.json");
    let jsonData: any = JSON.parse(rawData);

    let appInstance: App = new App(jsonData);

    rawData = fs.readFileSync("./Data/TestData.json");
    let jsonTestData: any = JSON.parse(rawData);

    jsonTestData.data.forEach( (testOrgJson: any) => {
        appInstance.calculate_membership_fee(20000, "week", testOrgJson);
    });

    console.log(jsonData);
}

runApp();
