/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];
  let ans = 0;
  let prod = 1;
  for (let i = 0; i < nums.length; i++) {
    prod = prod * nums[i];
    ans = Math.max(ans, prod);
    if (prod === 0) {
      prod = 1;
    }
  }
  prod = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    prod = prod * nums[i];
    ans = Math.max(ans, prod);
    if (prod === 0) {
      prod = 1;
    }
  }
  return ans;
};
