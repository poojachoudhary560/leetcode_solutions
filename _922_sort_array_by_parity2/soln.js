/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let even = 0;
  let odd = 1;
  let n = nums.length;
  while (even < n && odd < n) {
    while (nums[even] % 2 === 0) {
      even += 2;
    }
    while (nums[odd] % 2 === 1) {
      odd += 2;
    }
    // console.log(even, odd)
    if (even < n && odd < n) {
      let temp = nums[even];
      nums[even] = nums[odd];
      nums[odd] = temp;
    }
  }
  return nums;
};
