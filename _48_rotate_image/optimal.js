/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // transpose
  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  console.log(matrix);
  for (let i = 0; i <= matrix.length - 1; i++) {
    let rev = matrix[i].length - 1;
    for (let j = 0; j < Math.floor(matrix[0].length / 2); j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][rev];
      matrix[i][rev] = temp;
      rev--;
    }
  }

  // reverse
  return matrix;
};
