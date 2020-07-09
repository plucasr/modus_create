"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function checkIfDuplicateExists(w) {
    return new Set(w).size !== w.length;
}
describe("Permutations tests punch", () => {
    it("test if permute function returns repeated values", () => {
        let listPermutations = index_1.permute([1, 2, 3, 3]);
        checkIfDuplicateExists(listPermutations);
        expect(checkIfDuplicateExists(listPermutations)).toBe(false);
    });
    it("test if return values", () => {
        let listPermutations = index_1.permute([1, 2, 3, 3]);
        expect(listPermutations.length).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=index.test.js.map