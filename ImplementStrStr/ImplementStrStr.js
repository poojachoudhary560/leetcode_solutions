// 28. Implement strstr()

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  for (let i = 0; i < haystack.length; i++) {
    let flag = 0;
    let current = i;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[current] === needle[j]) {
        current++;
        flag++;
      }
      // console.log(i, j, flag, needle.length, haystack[i], needle[j])
      if (flag === needle.length) {
        return i;
      }
    }
  }
  return -1;
};
