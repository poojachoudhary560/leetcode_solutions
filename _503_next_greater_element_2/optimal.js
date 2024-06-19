/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let n = nums.length;
  nums = [...nums, ...nums];
  let stack = [];
  let vector = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      vector[i] = -1;
    } else if (stack.length > 0 && stack[stack.length - 1] > nums[i]) {
      vector[i] = stack[stack.length - 1];
    } else if (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        vector[i] = -1;
      } else {
        vector[i] = stack[stack.length - 1];
      }
    }
    stack.push(nums[i]);
  }
  console.log(vector);
  let excess = vector.length - n;
  for (let i = vector.length - 1; i >= excess; i--) {
    vector.pop();
  }
  // console.log(vector);
  return vector;
};
