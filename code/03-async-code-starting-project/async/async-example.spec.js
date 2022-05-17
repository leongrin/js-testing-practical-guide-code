import { it, expect } from "vitest/dist/index.js";
import { generateToken } from "./async-example.js";

it('should generate a token value', function (done) {
    const email = 'test@test.com';

    generateToken(email, (err, token) => {
        try {
            expect(token).toBeDefined();
            /*expect(token).toBe(2);*/ // to error purposely to test the error message
            done();
        } catch (err) {
            done(err);
        }

    });

}, 5000);
