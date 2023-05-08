/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let dp = Array(matrix.length)
    .fill(null)
    .map(() => Array(matrix[0].length));
  let max = 0;
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[0].length - 1; j >= 0; j--) {
      if (i === matrix.length - 1) {
        let valI = parseInt(matrix[i][j]);
        dp[i][j] = valI;
        if (valI === 1 && max === 0) {
          max = 1;
        }
      } else if (j === matrix[0].length - 1) {
        let valJ = parseInt(matrix[i][j]);
        dp[i][j] = valJ;
        if (valJ === 1 && max === 0) {
          max = 1;
        }
      } else {
        if (matrix[i][j] === "0") {
          dp[i][j] = 0;
        } else {
          dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]) + 1;
          if (dp[i][j] > max) {
            max = dp[i][j];
          }
        }
      }
    }
  }
  // console.log(dp)

  return max * max;
};
