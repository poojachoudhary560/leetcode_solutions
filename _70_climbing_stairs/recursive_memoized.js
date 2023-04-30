/**
 * @param {number} n
 * @return {number}
 */
var helper = function (n, t) {
  if (n <= 2) {
    return n;
  }
  if (t[n] !== -1) {
    return t[n];
  }
  let first = 0;
  if (t[n - 1] != -1) {
    first = t[n - 1];
  } else {
    first = helper(n - 1, t);
    t[n - 1] = first;
  }
  let second = 0;
  if (t[n - 2] != -1) {
    second = t[n - 2];
  } else {
    second = helper(n - 2, t);
    t[n - 2] = second;
  }
  return (t[n] = first + second);
  // return t[n] = helper(n-1, t) + helper(n-2, t);
};
var climbStairs = function (n) {
  let t = Array(n + 1).fill(-1);
  return helper(n, t);
};
