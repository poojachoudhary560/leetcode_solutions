/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var revHelper = function (str, l, r) {
  if (l >= r) return;
  let temp = str[l];
  str[l] = str[r];
  str[r] = temp;
  revHelper(str, l + 1, r - 1);
};

var reverseStr = function (s, k) {
  s = s.split("");
  for (var i = 0; i < s.length; i = i + 2 * k) {
    let nextI = i + 2 * k;
    if (s.length < nextI && nextI - i < k) {
      revHelper(s, i, s.length - 1);
    } else if (s.length < nextI && nextI - i < 2 * k && nextI - i >= k) {
      revHelper(s, i, s.length - 1);
    } else {
      revHelper(s, i, i + k - 1);
    }
  }
  return s.join("");
};
