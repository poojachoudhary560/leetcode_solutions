/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = "";
  let flag = true;
  let i = 0;
  let j = 0;
  while (i < word1.length && j < word2.length) {
    if (flag) {
      res += word1[i];
      i++;
    } else {
      res += word2[j];
      j++;
    }
    flag = !flag;
  }

  while (i < word1.length) {
    res += word1[i];
    i++;
  }

  while (j < word2.length) {
    res += word2[j];
    j++;
  }
  return res;
};
