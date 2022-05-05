/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let obj = {};
  while (1) {
    let val = 0;
    while (n) {
      let a = n % 10;
      val += a * a;
      n = Math.floor(n / 10);
    }
    if (val === 1) {
      return true;
    } else {
      if (obj[val]) return false;
      n = val;
      obj[val] = true;
    }
  }
  return false;
};
