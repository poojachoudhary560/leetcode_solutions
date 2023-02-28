/**
 * @param {string[]} arr
 * @return {number}
 */
var compare = function (currentStr, selected) {
  let selfCheck = Array(26);
  for (let i = 0; i < currentStr.length; i++) {
    if (selfCheck[currentStr.charCodeAt(i) - "a".charCodeAt(0)] === 1)
      return false;
    selfCheck[currentStr.charCodeAt(i) - "a".charCodeAt(0)] = 1;
  }
  for (let i = 0; i < currentStr.length; i++) {
    if (selected[currentStr.charCodeAt(i) - "a".charCodeAt(0)] === 1)
      return false;
  }
  return true;
};
var helper = function (i, arr, selected, maxLength) {
  if (i === arr.length) {
    return maxLength;
  }
  let currentstr = arr[i];
  if (compare(currentstr, selected) === false) {
    return helper(i + 1, arr, selected, maxLength);
  } else {
    for (let j = 0; j < currentstr.length; j++) {
      selected[currentstr.charCodeAt(j) - "a".charCodeAt(0)] = 1;
    }
    maxLength += currentstr.length;
    let op1 = helper(i + 1, arr, selected, maxLength);
    for (let j = 0; j < currentstr.length; j++) {
      selected[currentstr.charCodeAt(j) - "a".charCodeAt(0)] = 0;
    }
    maxLength -= currentstr.length;
    let op2 = helper(i + 1, arr, selected, maxLength);
    return Math.max(op1, op2);
  }
};
var maxLength = function (arr) {
  let selected = Array(26);
  return helper(0, arr, selected, 0);
};
