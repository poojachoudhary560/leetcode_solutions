/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let currentSum = 0;
  let prefixSum = [];
  if (nums.length < 2) return false;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    prefixSum[i] = currentSum;
  }

  let map = {};
  for (let i = 0; i < prefixSum.length; i++) {
    let modVal = prefixSum[i] % k;
    if (modVal === 0 && i > 0) return true;
    if (map[modVal] != undefined) {
      let diff = i - map[modVal];
      if (diff >= 2) return true;
    } else {
      map[modVal] = i;
    }
  }
  return false;
};
