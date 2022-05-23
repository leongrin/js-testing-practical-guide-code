import { expect, it, describe } from "vitest";
import {HttpError, ValidationError} from "./errors";

describe('class HttpError', () => {
    it('should contain the provided status code, message and data if I instantiate this class', function () {
        const testStatus = 1;
        const testMsg = 'test msg';
        const testData = { key: 'test val'};

        const testError = new HttpError(testStatus, testMsg, testData);

        expect(testError.statusCode).toBe(testStatus);
        expect(testError.message).toBe(testMsg);
        expect(testError.data).toBe(testData);
    }, 5000);

    it('should contain undefined data if no data is provided', function () {
        const testStatus = 1;
        const testMsg = 'test msg';

        const testError = new HttpError(testStatus, testMsg);

        expect(testError.statusCode).toBe(testStatus);
        expect(testError.message).toBe(testMsg);
        expect(testError.data).toBeUndefined();
    }, 5000);
});


describe('class ValidationError', () => {
    it('should contain the provided message if I instantiate this class', function () {
        const testMsg = 'test msg';

        const testValErr = new ValidationError(testMsg);

        expect(testValErr.message).toBe(testMsg);
    }, 5000);
});




