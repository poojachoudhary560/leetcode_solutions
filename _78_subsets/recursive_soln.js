/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var helper = function (nums, i) {
  if (nums.length === i) return [[]];
  let partialAns = helper(nums, i + 1);
  let ans = [];
  for (let item of partialAns) {
    ans.push([...item]);
  }
  for (let item of partialAns) {
    item.push(nums[i]);
    ans.push(item);
  }
  return ans;
};
var subsets = function (nums) {
  return helper(nums, 0);
};
