import { expect, it, describe } from "vitest";
import {validateNotEmpty} from "./validation";


it('should throw an error with the string is empty', function () {
    const str = '';
    expect(() => validateNotEmpty(str)).toThrow();
}, 5000);

it('should throw an error with the string contains blanks', function () {
    const str = '   ';
    expect(() => validateNotEmpty(str)).toThrow();
}, 5000);


it('should throw the exact error message when the string is empty', function () {
    const str = '';
    const errMsg = 'Some blank shit happened';
    expect(() => validateNotEmpty(str, errMsg)).toThrow(errMsg);
}, 5000);

