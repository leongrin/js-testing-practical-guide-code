import { it, expect } from "vitest/dist/index.js";
import {generateToken, generateTokenPromise} from "./async-example.js";

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


// Using promises
it('should generate a token', function () {
    const email = 'test@test.com';

    return expect(generateTokenPromise(email)).resolves.toBeDefined();

}, 5000);


// Using Async / Await
it('should generate a token', async function () {
    const email = 'test@test.com';

    const token = await generateTokenPromise(email);

    expect(token).toBeDefined();

}, 5000);
