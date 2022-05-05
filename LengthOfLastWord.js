/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let word = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      word = s[i] + word;
    }
    if (s[i] === " " && word.length > 0) {
      return word.length;
    }
  }
  return word.length;
};
