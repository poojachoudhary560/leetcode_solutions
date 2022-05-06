// 169. Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] = obj[nums[i]] + 1;
    }
  }
  let maxOcc = 0,
    maxOccItem = 0;
  for (let j in obj) {
    if (obj[j] > maxOcc) {
      maxOcc = obj[j];
      maxOccItem = j;
    }
  }
  return maxOccItem;
};
