/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var helper = function (s, l, r) {
  if (l > r) return;
  let temp = s[l];
  s[l] = s[r];
  s[r] = temp;
  helper(s, l + 1, r - 1);
};
var reverseString = function (s) {
  helper(s, 0, s.length - 1);
  return s;
};
