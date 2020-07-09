"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permute = void 0;
function permute(permutation) {
    let length = permutation.length;
    let result = [permutation.slice()];
    let c = new Array(length).fill(0);
    let i = 1;
    let k;
    let p;
    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
        }
        else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}
exports.permute = permute;
//# sourceMappingURL=index.js.map