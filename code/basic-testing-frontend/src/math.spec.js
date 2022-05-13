import { it, expect } from 'vitest';
import { add } from './math';

it('should sum all numbers in an array',  () => {

    // Arrange
    const numbers = [1, 2, 3];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((a, b) => a + b);

    expect(result).toBe(expectedResult);

}, 5000);


it('should yield a NaN if an invalid number is provided', function () {
    const inputs = ['invalid', 1];

    const result = add(inputs);

    const expectedResult = inputs.reduce((a, b) => a + b);

    expect(result).toBeNaN;

}, 5000);


it('should yield a correct number if an array of numeric string is provided', function () {

    // Arrange
    const numbers = ['1', '2', '3'];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((a, b) => +a + +b);

    expect(result).toBe(expectedResult);

}, 5000);




