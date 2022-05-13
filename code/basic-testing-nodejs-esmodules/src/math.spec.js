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


it('should yield 0 if an empty array is provided', function () {
    // Arrange
    const numbers = [];

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(0);
    expect(result).not.toBe(4);
    
}, 5000);


it('should throw an error if no value is provided to the function', function () {

    expect(() => add()).toThrow();

}, 5000);


it('should throw an error with provided with a non array argument', function () {

    expect((a, b) => add(a, b)).toThrow();

}, 5000);



