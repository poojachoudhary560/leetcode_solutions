/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let bitsCount = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    bitsCount[i] = bitsCount[i >> 1] + (i % 2);
  }
  return bitsCount;
};
