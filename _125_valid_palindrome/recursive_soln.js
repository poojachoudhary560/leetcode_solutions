/**
 * @param {string} s
 * @return {boolean}
 */
var palindromeHelper = function (l, r, s) {
  if (l >= r) return true;
  if (s[l] != s[r]) return false;
  return palindromeHelper(l + 1, r - 1, s);
};
var isPalindrome = function (s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      str += s[i];
    } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      str += s[i];
    } else if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      str += s[i].toLowerCase();
    } else {
      continue;
    }
  }
  return palindromeHelper(0, str.length - 1, str);
};
