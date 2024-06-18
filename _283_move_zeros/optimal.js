/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;

  // 0 to j - 1 => non-zeros
  // j to i - 1 => zeros
  // i to end => unknown

  while (i < nums.length) {
    if (nums[i] === 0) {
      i++;
    } else {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j++;
    }
  }
};
