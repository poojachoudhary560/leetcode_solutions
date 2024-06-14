/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[start] % 2 > nums[end] % 2) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
    }
    if (nums[start] % 2 == 0) {
      start++;
    }
    if (nums[end] % 2 == 1) {
      end--;
    }
  }
  return nums;
};
