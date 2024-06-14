/**
 * @param {string} s
 * @return {number}
 */

var lcs = function (s1, s2, m, n, dp) {
  if (m === 0 || n === 0) return 0;
  if (dp[m][n] !== -1) return dp[m][n];
  if (s1[m - 1] === s2[n - 1]) {
    return (dp[m][n] = 1 + lcs(s1, s2, m - 1, n - 1, dp));
  }
  return (dp[m][n] = Math.max(
    lcs(s1, s2, m, n - 1, dp),
    lcs(s1, s2, m - 1, n, dp)
  ));
};
var longestPalindromeSubseq = function (s) {
  let revS = s.split("").reverse().join("");
  let dp = Array(s.length + 1)
    .fill(null)
    .map(() => Array(s.length + 1).fill(-1));
  let res = lcs(s, revS, s.length, revS.length, dp);
  return res;
};
