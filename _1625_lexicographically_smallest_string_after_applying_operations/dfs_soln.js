/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */

var ansFinal = "";
var add = function (s, a) {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2) {
      ans += `${(Number(s[i]) + a) % 10}`;
    } else {
      ans += s[i];
    }
  }
  return ans;
};

var rotate = function (s, b) {
  let ans = "";
  let n = s.length;
  ans += s.substr(n - b);
  ans += s.substr(0, n - b);
  return ans;
};

var dfs = function (s, a, b, set) {
  if (set.has(s)) return;
  set.add(s);
  if (ansFinal > s) {
    ansFinal = s;
  }
  dfs(add(s, a), a, b, set);
  dfs(rotate(s, b), a, b, set);
};
var findLexSmallestString = function (s, a, b) {
  let min = s;
  let set = new Set();
  ansFinal = s;
  dfs(s, a, b, set, min);
  return ansFinal;
};
