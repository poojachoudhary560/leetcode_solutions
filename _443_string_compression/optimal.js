/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = 1;
  let count = 1;
  let ans = chars[0];
  while (i < chars.length) {
    if (chars[i] === chars[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        ans += count;
      }
      ans += chars[i];
      count = 1;
    }
    i++;
  }

  if (count > 1) {
    ans += count;
  }
  for (let j = 0; j < ans.length; j++) {
    chars[j] = ans[j];
  }
  return ans.length;
};
