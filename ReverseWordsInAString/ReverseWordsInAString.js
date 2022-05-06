// 151. Reverse Words in a String
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let word = "";
  let total = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      word = s[i] + word;
    } else {
      if (word) {
        total = total.length > 0 ? total + " " + word : word;
        // if(total.length > 0) {
        //     total = total + ' ' +  word;
        // } else {
        //     total += word;
        // }

        word = "";
      }
    }
  }
  if (word) {
    return total.length > 0 ? total + " " + word : word;
  }
  return total;
};
