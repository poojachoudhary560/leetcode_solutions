/**
 * @param {number[]} nums
 * @return {boolean}
 */
const subsetSum = (arr, n, sum, t) => {
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (i == 0) {
        t[i][j] = false;
      }
      if (j == 0) {
        t[i][j] = true;
      }

      if (i > 0 && j > 0) {
        if (arr[i - 1] <= j) {
          t[i][j] = t[i - 1][j - arr[i - 1]] || t[i - 1][j];
        } else {
          t[i][j] = t[i - 1][j];
        }
      }
    }
  }
  return t[n][sum];
};
var canPartition = function (nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += parseInt(nums[i]);
  }
  if (total % 2 === 0) {
    let t = Array(nums.length + 1)
      .fill(null)
      .map(() => Array(total + 1));

    return subsetSum(nums, nums.length, total / 2, t);
  } else {
    return false;
  }
};
