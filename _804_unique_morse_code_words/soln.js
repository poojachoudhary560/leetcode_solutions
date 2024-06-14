/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let unique_set = new Set();
  let morseRef = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  for (let word of words) {
    let res = "";
    for (let w of word) {
      res += morseRef[w.charCodeAt(0) - 97];
    }
    unique_set.add(res);
  }
  return unique_set.size;
};
