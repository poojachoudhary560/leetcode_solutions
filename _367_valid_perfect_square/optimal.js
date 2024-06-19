/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let invalidEndingCheck = num % 10;
  if (
    invalidEndingCheck === 2 ||
    invalidEndingCheck === 3 ||
    invalidEndingCheck === 7 ||
    invalidEndingCheck === 8
  ) {
    return false;
  }
  let l = 1;
  let r = num;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let sq = mid * mid;
    if (sq === num) return true;
    if (sq > num) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return false;
};
