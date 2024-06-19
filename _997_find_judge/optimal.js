/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  let trustCount = Array(n).fill(0);
  for (let i of trust) {
    trustCount[i[0] - 1]--;
    trustCount[i[1] - 1]++;
  }
  let result = -1;
  for (let i = 0; i < n; i++) {
    if (trustCount[i] === n - 1) {
      return i + 1;
    }
  }
  return result;
};
