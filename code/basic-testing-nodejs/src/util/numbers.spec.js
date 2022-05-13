import { it, expect } from "vitest";
import { transformToNumber } from './numbers';

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



