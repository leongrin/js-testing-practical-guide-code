import { expect, it, describe } from "vitest";
import { generateOutputText } from "./output";

describe('generateOutputText()', () => {
    it('should generate a string every time', function () {
        const val1 = 1;
        const val2 = 'invalid';
        const val3 = false;

        const result1 = generateOutputText(val1);
        const result2 = generateOutputText(val2);
        const result3 = generateOutputText(val3);

        expect(result1).toBe('Result: 1');
        expect(result2).toBe('Invalid input. You must enter valid numbers.');
        expect(result3).toBe('Result: false');
        expect(result1).toBeTypeOf('string');
    }, 5000);


    it('should return a string that contains the calculation result if a number is provided as a result', () => {
        const result = 5;

        const resultText = generateOutputText(result);

        expect(resultText).toContain(result.toString());
    }, 5000);

    it('should return an empty string if "no-calc" is provided as a result', () => {
        const result = 'no-calc';

        const resultText = generateOutputText(result);

        expect(resultText).toBe('');
    }, 5000);

    it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
        const result = 'invalid';

        const resultText = generateOutputText(result);

        expect(resultText).toContain('Invalid');
    }, 5000);
});




