/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// let ans = []
var helper = function (index, candidates, subset, target, currentsum, ans) {
  if (currentsum === target) {
    ans.push([...subset]);
    return;
  }
  if (currentsum > target) return;
  if (index === candidates.length) return;

  // include
  currentsum += candidates[index];
  subset.push(candidates[index]);
  helper(index, candidates, subset, target, currentsum, ans);
  currentsum -= candidates[index];
  subset.pop();

  // skip
  helper(index + 1, candidates, subset, target, currentsum, ans);
};

var combinationSum = function (candidates, target) {
  let ans = [];
  helper(0, candidates, [], target, 0, ans);
  return ans;
};
