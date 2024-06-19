/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let count = 0;
  let maxCount = 0;
  let vovels = "aeiou";
  let vovelSet = new Set(vovels);
  for (let i = 0; i < k; i++) {
    if (vovelSet.has(s[i])) {
      count++;
    }
  }
  console.log(count);
  maxCount = count;
  let l = 0;
  let r = k - 1;
  while (r < s.length) {
    if (vovelSet.has(s[l])) {
      count--;
    }
    l++;
    r++;
    if (vovelSet.has(s[r])) {
      count++;
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};
