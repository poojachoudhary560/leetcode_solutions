var isVovel = function (ch) {
  if (ch === "a" || ch === "A") {
    return true;
  } else if (ch === "e" || ch === "E") {
    return true;
  } else if (ch === "i" || ch === "I") {
    return true;
  } else if (ch === "o" || ch === "O") {
    return true;
  } else if (ch === "u" || ch === "U") {
    return true;
  }
  return false;
};
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (str) {
  let s = str.split("");
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    console.log(isVovel(s[leftIndex]), isVovel(s[rightIndex]));
    if (isVovel(s[leftIndex]) && isVovel(s[rightIndex])) {
      let temp = s[leftIndex];
      s[leftIndex] = s[rightIndex];
      s[rightIndex] = temp;
      leftIndex++;
      rightIndex--;
    } else if (isVovel(s[leftIndex])) {
      rightIndex--;
    } else if (isVovel(s[rightIndex])) {
      leftIndex++;
    } else {
      leftIndex++;
      rightIndex--;
    }
  }
  return s.join("");
};
