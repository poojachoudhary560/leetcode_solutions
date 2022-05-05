// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // [2,7,11,17]
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in obj) {
      return [obj[diff], i];
    } else {
      obj[nums[i]] = i;
    }
  }
  return [];
};
