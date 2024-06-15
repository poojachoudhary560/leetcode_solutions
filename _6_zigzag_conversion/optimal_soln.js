var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const arraySolution = new Array(numRows).fill("");
  let row = 0,
    step;
  for (let index = 0; index < s.length; index++) {
    arraySolution[row] += s[index];
    if (row === 0) step = 1;
    if (row === numRows - 1) step = -1;
    row += step;
    console.log(arraySolution, index, row, step);
  }
  return arraySolution.join("");
};
