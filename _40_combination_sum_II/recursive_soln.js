/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var helper = function (index, candidates, target, currentsum, subset, ans) {
  if (currentsum === target) {
    ans.push([...subset]);
    return;
  }
  if (index > candidates.length) return;
  if (currentsum > target) return;

  currentsum += candidates[index];
  subset.push(candidates[index]);
  helper(index + 1, candidates, target, currentsum, subset, ans);
  currentsum -= candidates[index];
  subset.pop();

  while (
    index + 1 < candidates.length &&
    candidates[index] === candidates[index + 1]
  )
    index++;
  helper(index + 1, candidates, target, currentsum, subset, ans);
};

var combinationSum2 = function (candidates, target) {
  let ans = [];
  candidates.sort();
  helper(0, candidates, target, 0, [], ans);
  return ans;
};
