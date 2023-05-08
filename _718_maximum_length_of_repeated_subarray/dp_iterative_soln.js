/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let max = 0;
  let dp = Array(nums1.length + 1)
    .fill(null)
    .map(() => Array(nums2.length + 1));
  for (let i = 0; i < nums1.length + 1; i++) {
    for (let j = 0; j < nums2.length + 1; j++) {
      if (i == 0 || j === 0) {
        dp[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < nums1.length + 1; i++) {
    for (let j = 1; j < nums2.length + 1; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        if (dp[i][j] > max) {
          max = dp[i][j];
        }
      } else {
        dp[i][j] = 0;
      }
    }
  }
  return max;
};
// 0    0  3  2. 1. 4. 7
// 0  [ 0, 0, 0, 0, 0, 0 ],
// 1  [ 0, 0, 0, 1, 0, 0 ],
// 2  [ 0, 0, 1, 0, 0, 0 ],
// 3  [ 0, 1, 0, 0, 0, 0 ],
// 2  [ 0, 0, 2, 0, 0, 0 ],
// 1  [ 0, 0, 0, 3, 0, 0 ]
