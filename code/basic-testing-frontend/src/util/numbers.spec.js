import { it, expect, describe } from "vitest";
import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber()', () => {

    it('should transform a number string into a number', function () {
        const input = '2';

        const result = transformToNumber(input);

        expect(result).toBe(2);

    }, 5000);


    it('should yield NaN when a non number string is provided', function () {
        const input = 'test';
        const input2 = {};

        const result = transformToNumber(input);
        const result2 = transformToNumber(input2);

        expect(result).toBeNaN();
        expect(result2).toBeNaN();

    }, 5000);

});

describe('cleanNumbers()', () => {
    it('should return an array of numbers if an array of string numbers is provided', function () {
        const numberValues = [ '1', '2'];

        const cleanedNumbers = cleanNumbers(numberValues);

        expect(cleanedNumbers[0]).toBeTypeOf('number');
        expect(cleanedNumbers).toEqual([1, 2]);  // toEqual works with comparing reference values, and toBe not.

    }, 5000);

    it('should throw an error if at least one empty string is provided', function () {
        const numbValues = [ '', 1];

        expect(() => cleanNumbers(numbValues)).toThrow();
    }, 5000);
});




