/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var find = function (x, parent) {
  if (x === parent[x]) return x;
  return (parent[x] = find(parent[x], parent));
};

var union = function (a, b, parent, rank) {
  a = find(a, parent);
  b = find(b, parent);
  if (rank[a] > rank[b]) {
    parent[b] = a;
    rank[a] += rank[b];
  } else {
    parent[a] = b;
    rank[b] += rank[a];
  }
};
var findRedundantConnection = function (edges) {
  let n = edges.length;
  let parent = Array(n + 1);
  let rank = Array(n + 1);
  for (let i = 0; i < parent.length; i++) {
    parent[i] = i;
    rank[i] = 1;
  }
  for (let i of edges) {
    if (find(i[0], parent) === find(i[1], parent)) return i;
    union(i[0], i[1], parent, rank);
  }
  return [];
};

/**
 * Applying Union find by rank and Path compression the worst case complexity is now O(log n)
 */
