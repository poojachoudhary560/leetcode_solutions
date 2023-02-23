/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  console.log(x, n);
  if (n == 0) return 1;
  if (n < 0) {
    n = Math.abs(n);
    x = 1 / x;
  }

  let partialAns = myPow(x, n - 1);
  console.log(partialAns * x, n - 1);
  return partialAns * x;
};
