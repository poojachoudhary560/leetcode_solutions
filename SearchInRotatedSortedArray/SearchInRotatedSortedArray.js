// 33. Search in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // check if arr left -right sorted
  let min = 0;
  let max = nums.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (nums[mid] === target) return mid;
    if (mid > min && mid < max) {
      // binary search here
    }
    if (nums[min] <= nums[mid]) {
      if (target >= nums[min] && target <= nums[mid]) {
        // target is in this arr
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }
    if (nums[mid] <= nums[max]) {
      if (target >= nums[mid] && target <= nums[max]) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
  }
  return -1;
};
