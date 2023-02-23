/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) return 1;
  if (n < 0) {
    n = Math.abs(n);
    x = 1 / x;
  }
  let temp = myPow(x, Math.floor(n / 2));
  if (n % 2 === 1) {
    return temp * temp * x;
  }
  return temp * temp;
};
