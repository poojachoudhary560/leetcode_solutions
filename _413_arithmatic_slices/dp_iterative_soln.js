/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let dp = Array(nums.length).fill(0);
  dp[0] = 0;
  dp[1] = 0;
  let ans = 0;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp[i] = dp[i - 1] + 1;
      ans += dp[i];
    }
  }
  return ans;
};
