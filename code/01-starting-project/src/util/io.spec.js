import { it, expect, vi } from "vitest";
import writeData from "./io.js";
import { promises as fs } from 'fs';
import path from 'path';


vi.mock('fs');
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1]
            }
        }
    }
});

it('should execute the writeFile method', function () {
    const testData = 'test';
    const testFileName = 'test.txt';

    writeData(testData, testFileName);

    return expect(writeData(testData, testFileName)).resolves.toBeUndefined();

    /*expect(fs.writeFile).toBeCalled();*/

    /*expect(fs.writeFile).toBeCalledWith(testFileName, testData);*/

}, 5000);

