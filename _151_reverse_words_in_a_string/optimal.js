/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = "";
  let ar = s.split(" ");
  for (let i = ar.length - 1; i >= 0; i--) {
    if (ar[i]) {
      res += ar[i] + " ";
    }
  }
  return res.trim();
};
