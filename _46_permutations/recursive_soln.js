/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let recursionPermute = (index, nums, ans) => {
  if (index === nums.length) {
    ans.push([...nums]);
    return;
  }
  for (let i = index; i < nums.length; i++) {
    swap(i, index, nums);
    recursionPermute(index + 1, nums, ans);
    swap(i, index, nums);
  }
};

let swap = (i, j, nums) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

var permute = function (nums) {
  let res = [];
  recursionPermute(0, nums, res);
  return res;
};
