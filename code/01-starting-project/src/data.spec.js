import { describe, it, expect, vi } from "vitest/dist/index.js";
import { generateReportData } from "./data.js";


describe('generateReportData()', () => {
    it('should execute logFn if provided', function () {

        const spyFunction = vi.fn();  // the spy function

        generateReportData(spyFunction);

        expect(spyFunction).toBeCalled();

    }, 5000);
});




