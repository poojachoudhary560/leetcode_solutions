// 136. single number
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      delete obj[nums[i]];
    }
  }
  return Object.keys(obj)[0];
};

var singleNumber = function (nums) {
  let number = 0;
  for (let i = 0; i < nums.length; i++) {
    number ^= nums[i];
  }
  return number;
};

let a = [4, 1, 2, 4, 6, 1, 2];
singleNumber(a);
