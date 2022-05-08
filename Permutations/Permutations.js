// 46. Permutations

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let freq = {};
  let ds = [];
  let res = [];
  let permutation = function () {
    if (ds.length === nums.length) {
      res.push([...ds]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!freq[i]) {
        freq[i] = true;
        ds.push(nums[i]);
        permutation();
        ds.pop();
        freq[i] = false;
      }
    }
  };
  permutation();
  return res;
};
