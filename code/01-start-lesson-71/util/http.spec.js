import {expect, describe, it, vi, stringify} from "vitest";
import {sendDataRequest} from "./http";
import {HttpError} from "./errors";


const testResponseData = {
    testKey: 'test data'
};

const testFetchFunction = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
        if (typeof options.body !== 'string') {
            return reject('not a string.')
        }
        const testResponse = {
            ok: true,
            json() {
                return new Promise((resolve1, reject1) => {
                    resolve1(testResponseData);
                })
            }
        };
        resolve(testResponse);
    })
});

vi.stubGlobal('fetch', testFetchFunction);

it('should return any available response data', function () {

    const testData = {key: 'test'};

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);

}, 5000);


it('should convert the provided data to JSON before sending the request', async function () {

    const testData = {key: 'test'};

    let errorMsg;

    try {
        await sendDataRequest(testData);
    } catch (error) {
        errorMsg = error;
    }

    return expect(errorMsg).not.toEqual('not a string.');
}, 5000);


it('should throw a non-Http error in case a non ok response', function () {
    testFetchFunction.mockImplementationOnce((url, options) => {
        return new Promise((resolve, reject) => {
            const testResponse = {
                ok: false,
                json() {
                    return new Promise((resolve1, reject1) => {
                        resolve1(testResponseData);
                    })
                }
            };
            resolve(testResponse);
        })
    });

    const testData = {key: 'test'};

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);

}, 5000);
