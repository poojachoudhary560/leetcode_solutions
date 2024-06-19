/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */

var dfs = function (a_list, groups, vertex, grp) {
  //  console.log(groups, vertex, grp)
  if (groups[vertex] == -1) {
    groups[vertex] = grp;
  } else {
    return groups[vertex] === grp;
  }

  for (let n of a_list[vertex]) {
    if (!dfs(a_list, groups, n, 1 - grp)) {
      return false;
    }
  }
  return true;
};
var possibleBipartition = function (n, dislikes) {
  // create adjacency list
  let adj_list = Array(n);
  let group = Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    adj_list[i] = [];
  }
  for (let pair of dislikes) {
    adj_list[pair[0] - 1].push(pair[1] - 1);
    adj_list[pair[1] - 1].push(pair[0] - 1);
  }
  // console.log(adj_list);
  for (let i = 0; i < n; i++) {
    if (group[i] == -1 && !dfs(adj_list, group, i, 0)) {
      return false;
    }
  }
  return true;
};
