/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let res = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      res.push(i);
    }
  }
  return res;
};

var isSelfDividing = (no) => {
  for (let i of no.toString()) {
    if (i === "0" || no % parseInt(i) > 0) {
      return false;
    }
  }
  return true;
};
