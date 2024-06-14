/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var helper = function (index, n, k, subset, ans) {
  if (k == 0) {
    ans.push([...subset]);
    return;
  }
  if (index > n) return;
  if (k > n - index + 1) return;
  subset.push(index);
  helper(index + 1, n, k - 1, subset, ans);
  subset.pop();

  helper(index + 1, n, k, subset, ans);
};
var combine = function (n, k) {
  let ans = [];
  helper(1, n, k, [], ans);
  return ans;
};
