/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  let dp = Array(matrix.length)
    .fill(null)
    .map(() => Array(matrix[0].length));

  let count = 0;
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[0].length - 1; j >= 0; j--) {
      if (i === matrix.length - 1 && j === matrix[0].length - 1) {
        dp[i][j] = matrix[i][j];
        if (matrix[i][j] === 1) {
          count++;
        }
      } else if (i === matrix.length - 1) {
        dp[i][j] = matrix[i][j];
        if (matrix[i][j] === 1) {
          count++;
        }
      } else if (j === matrix[0].length - 1) {
        dp[i][j] = matrix[i][j];
        if (matrix[i][j] === 1) {
          count++;
        }
      } else {
        if (matrix[i][j] === 0) {
          dp[i][j] = 0;
        } else {
          count++;
          let min = Math.min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]) + 1;
          dp[i][j] = min;
          while (min > 1) {
            count++;
            min--;
          }
        }
      }
    }
  }
  console.log(dp);
  return count;
};
