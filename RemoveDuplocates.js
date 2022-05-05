// Remove duplicates from sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let currentPointer = 1;
  let uniquePointer = 0;
  for (let i = 1; i < nums.length; i++) {
    // console.log('uniquePointer', uniquePointer, nums[uniquePointer], nums[i], nums)

    if (nums[uniquePointer] === nums[i]) {
      nums[i] = "_";
    } else {
      uniquePointer = uniquePointer + 1;
      nums[uniquePointer] = nums[i];
      // nums[i] = '_'
      if (uniquePointer !== i) {
        nums[i] = "_";
      }
    }
  }
  return uniquePointer + 1;
};

let ar = [1, 2];
removeDuplicates(ar);
