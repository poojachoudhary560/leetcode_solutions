/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */

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

var bfs = function (s, a, b, set) {
  let ansFinal = s;
  let queue = [];
  queue.push(s);
  while (queue.length > 0) {
    let item = queue.shift();
    if (ansFinal > item) {
      ansFinal = item;
    }
    let op1 = add(item, a);
    if (!set.has(op1)) {
      queue.push(op1);
      set.add(op1);
    }
    let op2 = rotate(item, b);
    if (!set.has(op2)) {
      queue.push(op2);
      set.add(op2);
    }
  }
  return ansFinal;
};
var findLexSmallestString = function (s, a, b) {
  let set = new Set();
  let ans = bfs(s, a, b, set);
  return ans;
};
