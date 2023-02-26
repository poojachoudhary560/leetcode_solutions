/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var swap = function (nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
};

var helper = function (nums, res, index) {
  if (index === nums.length) {
    res.push([...nums]);
    return;
  }
  let mySet = new Set();
  for (let i = index; i < nums.length; i++) {
    if (mySet.has(nums[i])) continue;
    mySet.add(nums[i]);
    swap(nums, i, index);
    helper(nums, res, index + 1);
    swap(nums, i, index);
  }
};

var permuteUnique = function (nums) {
  let res = [];
  helper(nums, res, 0);
  return res;
};
