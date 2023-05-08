/**
 * @param {string} s
 * @return {number}
 */
var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let str = "";
    for (let j = i; j < s.length; j++) {
      str += s[j];
      let res = isPalindrome(str);
      if (res) {
        count++;
      }
    }
  }
  return count;
};
