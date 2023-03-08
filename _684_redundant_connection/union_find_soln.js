/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var find = function (x, parent) {
  if (x === parent[x]) return x;
  return find(parent[x], parent);
};

var union = function (a, b, parent) {
  a = find(a, parent);
  b = find(b, parent);
  parent[a] = b;
};
var findRedundantConnection = function (edges) {
  let n = edges.length;
  let parent = Array(n + 1);
  for (let i = 0; i < parent.length; i++) {
    parent[i] = i;
  }
  console.log(parent);
  for (let i of edges) {
    if (find(i[0], parent) === find(i[1], parent)) return i;
    union(i[0], i[1], parent);
  }
  return [];
};
