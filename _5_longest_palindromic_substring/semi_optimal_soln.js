/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  // testing odd length palindromes
  for (let axis = 0; axis < s.length; axis++) {
    let orbit = 1;
    let len = 1;

    while (axis - orbit >= 0 && axis + orbit < s.length) {
      if (s[axis - orbit] === s[axis + orbit]) {
        orbit++;
        len += 2;
      } else {
        break;
      }
    }

    if (len > res.length) {
      let startIndex = axis - Math.floor(len / 2);
      res = s.substring(startIndex, startIndex + len);
    }
  }

  // testing even length palindromes
  for (let axis = 0; axis < s.length - 1; axis++) {
    let orbit = 1;
    let len = 0;
    while (axis - orbit + 1 >= 0 && axis + orbit < s.length) {
      if (s[axis - orbit + 1] === s[axis + orbit]) {
        len += 2;
        orbit++;
      } else {
        break;
      }
    }

    if (len > res.length) {
      let startIndex = axis - Math.floor(len / 2) + 1;
      res = s.substring(startIndex, startIndex + len);
    }
  }

  return res;
};
