/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0 || s.length === 1) return s.length;
  let set = new Set();
  let left = 0;
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    maxCount = Math.max(i - left + 1, maxCount);
  }
  return maxCount;
};
