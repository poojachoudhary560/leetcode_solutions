/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let min_freq = Array(26).fill(Infinity);
  let common = [];
  for (let word of words) {
    let char_freq = Array(26).fill(0);
    for (let w = 0; w < word.length; w++) {
      char_freq[word.charCodeAt(w) - 97]++;
    }
    for (let i = 0; i < 26; i++) {
      min_freq[i] = Math.min(min_freq[i], char_freq[i]);
    }
    // console.log(char_freq)
  }
  for (let i = 0; i < 26; i++) {
    while (min_freq[i] > 0) {
      common.push(String.fromCharCode(i + 97));
      min_freq[i]--;
    }
  }
  return common;
};
