export const MINIMUM_RENT_AMOUNT_PER_WEEK: number = 2500; //£25
export const MAXIMUM_RENT_AMOUNT_PER_WEEK: number = 200000; //£2000
export const WEEKS_IN_A_MONTH: number = 4.345;

export function validateInputForMembership(rent_amount: number, rent_period: string, organisation_unit: any) {
    let result: string[] = [];
    validationRuleForPeriod(rent_period, result);
    validationRuleForAmount(rent_amount, rent_period, result);
    validationRuleForOrganisationUnit(organisation_unit, result);

    if(result.length > 0){
        throw result.toString();
    }
}

/***
 * Validation rules for the rent amount input
 * 1. Minimum rent amount is MINIMUM_RENT_AMOUNT_PER_WEEK
 * 2. Maximum rent amount is MAXIMUM_RENT_AMOUNT_PER_WEEK
 * @param rent_amount
 * @param rent_period
 * @param result
 */
function validationRuleForAmount(rent_amount: number, rent_period: string, result: string[]) {
    let amount: number;
    if(rent_period === "month"){
        amount = rent_amount / WEEKS_IN_A_MONTH;
    }
    else {
        amount = rent_amount;
    }

    if(amount < MINIMUM_RENT_AMOUNT_PER_WEEK) {
        result.push("The rent amount is too small")
    }
    if(amount > MAXIMUM_RENT_AMOUNT_PER_WEEK) {
        result.push("The rent amount is too large")
    }
}

function validationRuleForPeriod(rent_period: string, result: string[]) {
    if(!(rent_period === "week" || rent_period === "month")){
        result.push("The rent period is invalid");
    }
}

function validationRuleForOrganisationUnit(organisation_unit: any, result: string[]) {
    if(!organisation_unit.name){
        result.push("OrganisationUnit is missing a name");
    }
}
