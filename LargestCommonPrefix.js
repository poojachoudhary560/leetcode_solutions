// 14. Largest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    let currentStr = strs[i];
    let newPrefix = "";
    while (j < prefix.length && prefix[j] === currentStr[j]) {
      newPrefix += prefix[j];
      j++;
    }
    prefix = newPrefix;
  }
  return prefix;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  let prePrefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    prefix += strs[0][i];
    for (j = 1; j < strs.length; j++) {
      // if(!strs[j].startsWith(prefix)) {
      // if(!new RegExp('^' + prefix).test(strs[j])) {
      if (strs[j].indexOf(prefix) !== 0) {
        return prePrefix;
      }
    }
    prePrefix = prefix;
  }
  return prefix;
};
