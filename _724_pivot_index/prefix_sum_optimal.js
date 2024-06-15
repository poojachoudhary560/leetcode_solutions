/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let lSum = 0,
    rSum = sum;
  for (let i = 0; i < nums.length; i++) {
    rSum = rSum - nums[i];
    if (lSum === rSum) return i;
    lSum += nums[i];
  }
  return -1;
};
