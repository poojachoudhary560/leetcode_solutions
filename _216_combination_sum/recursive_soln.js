/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var helper = function (index, k, n, currentsum, subset, ans) {
  if (subset.length === k) {
    if (currentsum === n) {
      ans.push([...subset]);
      return;
    }
    return;
  }
  if (subset.length === 0 && n - index + 1 < k) return;
  if (currentsum > n) return;
  if (subset.length > k) return;
  if (index == 10) return;
  currentsum += index;
  subset.push(index);
  helper(index + 1, k, n, currentsum, subset, ans);
  currentsum -= index;
  subset.pop();

  helper(index + 1, k, n, currentsum, subset, ans);
};
var combinationSum3 = function (k, n) {
  let ans = [];
  helper(1, k, n, 0, [], ans);
  return ans;
};
