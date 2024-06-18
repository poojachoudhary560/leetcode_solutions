/**
 * @param {number} n
 * @return {string[]}
 */
var helper = function (ans, n, str, openBrace, closeBrace) {
  if (openBrace > n || closeBrace > n || openBrace < closeBrace) return;
  if (str.length === 2 * n && openBrace === closeBrace) {
    ans.push(str);
  }
  helper(ans, n, str + "(", openBrace + 1, closeBrace);
  helper(ans, n, str + ")", openBrace, closeBrace + 1);
};
var generateParenthesis = function (n) {
  let ans = [];

  let str = "";
  let openBrace = 0;
  let closeBrace = 0;
  helper(ans, n, str, openBrace, closeBrace);
  return ans;
};
