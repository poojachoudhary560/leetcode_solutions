/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let res = [];
  for (let i = left; i <= right; i++) {
    let j = i;
    while (j > 0) {
      if (j % 10 == 0 || i % (j % 10) != 0) break;
      j = Math.floor(j / 10);
      // console.log(i, j)
    }
    if (j == 0) res.push(i);
  }
  return res;
};
