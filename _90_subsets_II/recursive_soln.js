/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var helper = function (index, nums, subset, ans) {
  if (index === nums.length) {
    ans.push([...subset]);
    return;
  }

  subset.push(nums[index]);
  helper(index + 1, nums, subset, ans);
  subset.pop();

  // skip
  while (index + 1 < nums.length && nums[index] === nums[index + 1]) index++;
  helper(index + 1, nums, subset, ans);
};
var subsetsWithDup = function (nums) {
  nums.sort();
  let ans = [];
  helper(0, nums, [], ans);
  return ans;
};
