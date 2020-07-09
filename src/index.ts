interface IIsonResult {
  (result: Array<any>, valueToCheck: any): boolean;
}
const isOnResult: IIsonResult = (result, valueToCheck) => {
  return result.indexOf(valueToCheck.toString()) === -1;
};

interface IPermute {
  (permutation: number[]): Array<any>;
}
export const permute: IPermute = (permutation) => {
  let length = permutation.length;
  let result = [permutation.slice().toString()];
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
      if (isOnResult(result, permutation.slice())) {
        result.push(permutation.slice().toString());
      }
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result.map((item) => item.split(","));
};
