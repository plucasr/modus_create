import { permute } from "./index";

function checkIfDuplicateExists(w) {
  return new Set(w).size !== w.length;
}

describe("Permutations tests punch", () => {
  it("test if permute function returns repeated values", () => {
    let listPermutations = permute([1, 2, 3, 3]);
    checkIfDuplicateExists(listPermutations.map(item => item.join('')));
    expect(checkIfDuplicateExists(listPermutations.map(item => item.join('')))).toBe(false);
  });
  it("test if return values", () => {
    let listPermutations = permute([1, 2, 3, 3]);
    expect(listPermutations.length).toBeGreaterThan(0);
  });
});
