/**
 * @param {number[]} nums
 * @return {number}
 */
var helper = function (arr, l, r) {
  if (l === r) {
    return arr[l];
  }
  let mid = Math.floor((l + r) / 2);
  let leftSum = helper(arr, l, mid);
  let rightSum = helper(arr, mid + 1, r);
  let lMaxSum = -Infinity,
    rMaxSum = -Infinity,
    sum = 0;
  for (let i = mid; i >= l; i--) {
    sum += arr[i];
    if (sum > lMaxSum) {
      lMaxSum = sum;
    }
  }
  sum = 0;
  for (let i = mid + 1; i <= r; i++) {
    sum += arr[i];
    if (sum > rMaxSum) {
      rMaxSum = sum;
    }
  }
  return Math.max(leftSum, rightSum, lMaxSum + rMaxSum);
};
var maxSubArray = function (nums) {
  return helper(nums, 0, nums.length - 1);
};
