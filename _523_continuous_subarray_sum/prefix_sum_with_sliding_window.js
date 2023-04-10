/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let currentSum = 0;
  let prefixSum = [];
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    prefixSum[i] = currentSum;
  }
  for (let left = 0; left < nums.length - 1; left++) {
    for (let right = left + 1; right < nums.length; right++) {
      if ((prefixSum[right] - (prefixSum[left - 1] || 0)) % k === 0) {
        return true;
      }
    }
  }
  return false;
};
