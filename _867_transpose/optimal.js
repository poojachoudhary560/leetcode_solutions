/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let r = matrix.length;
  let c = matrix[0].length;
  let result = Array(c);
  for (let i = 0; i < c; i++) {
    result[i] = Array(r);
    for (let j = 0; j < r; j++) {
      result[i][j] = matrix[j][i];
    }
  }
  return result;
};
