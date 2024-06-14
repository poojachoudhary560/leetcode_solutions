/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let currentSum = 0;
  let left = 0;
  let minLength = Infinity;
  let prefixSum = [];
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    prefixSum[i] = currentSum;
  }

  for (let right = 0; right < nums.length; right++) {
    while (prefixSum[right] - (prefixSum[left - 1] || 0) >= target) {
      minLength = Math.min(minLength, right - left + 1);
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};
