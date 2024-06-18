/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let dp = [];
  dp[0] = [""];
  dp[1] = ["()"];
  for (let i = 2; i <= n; i++) {
    dp[i] = [];
    let inner = i - 1;
    let outer = 0;
    while (inner >= 0 && outer <= i - 1) {
      for (let innerItem of dp[inner]) {
        for (let outerItem of dp[outer]) {
          let res = "" + "(" + innerItem + ")" + outerItem;
          dp[i].push(res);
        }
      }
      inner--;
      outer++;
    }
  }
  return dp[n];
};
