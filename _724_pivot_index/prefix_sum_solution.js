/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let prefixSumArr = [];
  let prefixSumArrFromLast = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSumArr[i] = sum;
  }
  sum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    sum += nums[i];
    prefixSumArrFromLast[i] = sum;
  }
  for (let i = 0; i < nums.length; i++) {
    if (prefixSumArr[i] === prefixSumArrFromLast[i]) return i;
  }

  return -1;
};
