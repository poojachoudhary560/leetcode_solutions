// 13. Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let symbolMap = {
    I: "1",
    V: "5",
    X: "10",
    L: "50",
    C: "100",
    D: "500",
    M: "1000",
  };
  let romanCh = s[s.length - 1];
  let romanChVal = parseInt(symbolMap[romanCh]);
  let total = romanChVal;
  for (let i = s.length - 2; i >= 0; i--) {
    let tempCh = s[i];
    let tempChVal = parseInt(symbolMap[tempCh]);
    if (tempChVal < romanChVal) {
      total = total - tempChVal;
    } else {
      total = total + tempChVal;
    }
    romanCh = tempCh;
    romanChVal = tempChVal;
  }
  return total;
};
