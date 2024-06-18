/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let ans = Array(nums.length);
  let prevProd = 1;
  ans[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    ans[i] = nums[i - 1] * ans[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    prevProd = prevProd * nums[i + 1];
    ans[i] = ans[i] * prevProd;
  }
  return ans;
};

// 1 2 3 4
// 1 1 2 6
