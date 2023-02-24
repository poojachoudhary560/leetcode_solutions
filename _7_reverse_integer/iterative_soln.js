/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var no = Math.abs(x);
  let newNo = 0;
  while (no != 0) {
    let remainder = no % 10;
    no = Math.floor(no / 10);
    newNo = newNo * 10 + remainder;
  }
  x = x > 0 ? newNo : 0 - newNo;
  if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)) return 0;
  return x;
};
