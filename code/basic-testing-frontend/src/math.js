import {cleanNumbers} from "./util/numbers";

export function add(numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum += +number;
    }
    return sum;
}


export function getResult(numberInputs) {
    try {
        const numbers = cleanNumbers(numberInputs)
        return add(numbers).toString();
    } catch (error) {
        return error.message;
    }
}
