import {Client} from "../Models/Client";
import {OrganisationType, OrganisationUnit} from "../Models/OrganisationUnit";
import {Division} from "../Models/Division";
import {Area} from "../Models/Area";
import {Branch} from "../Models/Branch";

export function findFixedMembershipFee(organisation_unit: any, clients: Client[]): number {
    if(organisation_unit.config &&
        organisation_unit.config.has_fixed_membership_fee &&
        organisation_unit.config.fixed_membership_fee_amount > 0){

        return organisation_unit.config.fixed_membership_fee_amount;
    }

    let nameToFind = organisation_unit.name;
    let underscoreIndex = nameToFind.indexOf('_');
    let type = nameToFind.substring(0, underscoreIndex > 0 ? underscoreIndex : nameToFind.length);
    let organisationUnitFound: OrganisationUnit | undefined = findOrgUnitFromClients(nameToFind, clients, type);
    return findFixedFeeFromParents(organisationUnitFound);
}

function findOrgUnitFromClients(nameToFind: string, clients: Client[], type: OrganisationType): OrganisationUnit | undefined {
    if (type === OrganisationType.Client) {
        return findNameFromOrgUnitArray(nameToFind, clients);
    }

    let divisions: Division[] = [];
    clients.forEach( (client: Client) => {
        divisions = divisions.concat(client.divisions);
    });

    if (type === OrganisationType.Division) {
        return findNameFromOrgUnitArray(nameToFind, divisions);
    }

    let areas: Area[] = [];
    divisions.forEach( (division: Division) => {
        areas = areas.concat(division.areas);
    });

    if (type === OrganisationType.Area) {
        return findNameFromOrgUnitArray(nameToFind, areas);
    }

    let branches: Branch[] = [];
    areas.forEach( (area: Area) => {
        branches = branches.concat(area.branches);
    });

    if (type === OrganisationType.Branch) {
        return findNameFromOrgUnitArray(nameToFind, branches);
    }

    //TODO find type earlier to avoid wasting computation
    throw "Error: undefined organisation type"
}

function findNameFromOrgUnitArray(nameToFind: string, array: OrganisationUnit[]): OrganisationUnit | undefined {
    return array.find((orgUnit: OrganisationUnit) => {
        return orgUnit.name === nameToFind;
    });
}

function findFixedFeeFromParents(node: OrganisationUnit | undefined): number {
    if (node === undefined) {
        return 0;
    }

    let config = node.config;
    if(config && config.has_fixed_membership_fee && config.fixed_membership_fee_amount > 0){
        return config.fixed_membership_fee_amount;
    }
    else{
        return findFixedFeeFromParents(node.parent);
    }
}
