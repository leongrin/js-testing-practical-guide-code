import {validateNumber, validateStringNotEmpty} from "./validation";
import {add} from "../math";

export function transformToNumber(value) {
  return +value;
}


export function cleanNumbers(numbersArray) {
  const numbers = [];
  for (const numberInput of numbersArray) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
