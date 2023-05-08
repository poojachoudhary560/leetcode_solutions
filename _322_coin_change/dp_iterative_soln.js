/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {
  //   0 1 2 3 4 5 6 7 8 9 10 11
  // 0 1 0 0 0 0 0 0 0 0 0 0 0 0
  // 1 1
  // 2 1
  // 5 1
  let n = coins.length;
  let dp = Array(n + 1)
    .fill(null)
    .map(() => Array(amount + 1).fill(Infinity));
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < amount + 1; j++) {
      if (i === 0) dp[i][j] = 0;
      if (j === 0) dp[i][j] = 1;
    }
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < amount + 1; j++) {
      if (coins[i - 1] <= j) {
        dp[i][j] = Math.min(dp[i - 1][j], 1 + dp[i - 1][j - coins[i - 1]]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  console.log(dp);
  return dp[n][amount];
};
