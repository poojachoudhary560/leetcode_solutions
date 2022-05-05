// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let regex = /[^A-Za-z0-9]/g;
  let result = s.replace(regex, "").toLowerCase();
  let start = 0,
    end = result.length - 1;
  while (start < end) {
    if (result[start] !== result[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
