/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */

var revHelper = function (word, l, r) {
  if (l >= r) return;
  let temp = word[l];
  word[l] = word[r];
  word[r] = temp;
  revHelper(word, l + 1, r - 1);
};
var reversePrefix = function (word, ch) {
  let chIndex = -1;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == ch) {
      chIndex = i;
      break;
    }
  }
  if (chIndex) {
    word = word.split("");
    revHelper(word, 0, chIndex);
    return word.join("");
  }

  return word;
};
