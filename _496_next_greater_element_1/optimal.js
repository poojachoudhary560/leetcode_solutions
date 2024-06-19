/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let vector1 = {};
  for (let i = nums2.length - 1; i >= 0; i--) {
    if (stack.length == 0) {
      vector1[nums2[i]] = -1;
    } else if (stack.length > 0 && stack[stack.length - 1] > nums2[i]) {
      vector1[nums2[i]] = stack[stack.length - 1];
    } else if (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
        stack.pop();
      }
      // console.log("stack", stack)
      if (stack.length === 0) {
        vector1[nums2[i]] = -1;
      } else {
        vector1[nums2[i]] = stack[stack.length - 1];
      }
    }
    stack.push(nums2[i]);
    // console.log(vector, vector1)
  }
  // console.log(vector, vector1)
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    res.push(vector1[nums1[i]]);
  }
  return res;
};
