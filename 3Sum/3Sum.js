// 15. 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  let mapO = {};
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          console.log(nums[i], nums[j], nums[k]);
          // if(mapO[nums[i]] || mapO[(nums[j])] || mapO[nums[k]]) {
          //     continue;
          // }
          mapO[nums[i] + nums[j]] = nums[k];
          console.log(mapO);
          result.push([nums[i], nums[j], nums[k]]);
          break;
        }
      }
    }
  }
  return result;
};
