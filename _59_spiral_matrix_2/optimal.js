/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;
  // let res = Array(n).fill(Array(n));
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push([]);
  }
  let count = 1;
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      res[rowStart][i] = count;
      count++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      // console.log(i, colEnd, count)
      res[i][colEnd] = count;
      count++;
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        res[rowEnd][i] = count;
        count++;
      }
      rowEnd--;
    }

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        res[i][colStart] = count;
        count++;
      }
      colStart++;
    }
  }
  return res;
};
