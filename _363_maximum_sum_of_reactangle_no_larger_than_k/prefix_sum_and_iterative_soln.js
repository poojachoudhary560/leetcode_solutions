/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
//  [[5,  -4, -3,  4],
//   [-3, -4,  4,  5],
//   [5,   1,  5, -4]]
var kadaneAlgo = function (nums, k) {
  console.log("nums", nums);
  let maxSum = -Infinity;
  let sum = 0;
  let start = 0,
    end = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxSum && sum <= k) {
      maxSum = sum;
      end = i;
    }
    if (sum < 0) {
      sum = 0;
      start = i + 1;
    }
  }
  // console.log("maxSum, start, end ", maxSum, start, end)
  return [maxSum, start, end];
};

function findMaxSum(arr, k) {
  let maxSum = -Infinity;
  for (let l = 0; l < arr.length; l++) {
    let sum = 0;
    for (let r = l; r < arr.length; r++) {
      sum += arr[r];
      if (sum <= k) {
        maxSum = Math.max(maxSum, sum);
      }
    }
  }
  return maxSum;
}

var maxSumSubmatrix = function (matrix, k) {
  if (matrix.length === 0 || matrix[0].length === 0) return null;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let maxL = 0,
    maxR = 0,
    maxTop = 0,
    maxBottom = 0;
  let res = -Infinity;

  let arr = Array(matrix.length);

  // for(let i=0; i<matrix.length; i++) {
  for (let l = 0; l < cols; l++) {
    arr.fill(0);
    for (let r = l; r < cols; r++) {
      for (let i = 0; i < rows; i++) {
        arr[i] += matrix[i][r];
      }
      res = Math.max(res, findMaxSum(arr, k));
      // let [maxSum, start, end] = kadaneAlgo(arr, k)
      // console.log(maxSum, start, end)
      // console.log("maxSum, start, end ", maxSum, start, end)

      // if(maxSum <= k) {
      //     res = Math.max(res, maxSum);
      //     maxL = l;
      //     maxR = r;
      //     maxTop = start,
      //     maxBottom = end;
      //     console.log(res, maxL, maxR, maxTop, maxBottom)
      // }
    }
  }
  return res;
};
