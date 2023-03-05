/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
  if (n == 1) return [1];
  let res = Array(n);
  let adjList = {};
  for (let path of paths) {
    if (adjList[path[0]]) {
      adjList[path[0]].push(path[1]);
    } else {
      adjList[path[0]] = Array(1).fill(path[1]);
    }
    if (adjList[path[1]]) {
      adjList[path[1]].push(path[0]);
    } else {
      adjList[path[1]] = Array(1).fill(path[0]);
    }
  }
  for (let i = 1; i <= n; i++) {
    let colors = Array(5).fill(0);
    let listItem = adjList[i];
    if (listItem?.length > 0) {
      for (let j of listItem) {
        if (res[j - 1]) {
          colors[res[j - 1]] = 1;
        }
      }
    }
    for (let c = 1; c <= 4; c++) {
      if (colors[c] === 0) {
        res[i - 1] = c;
        break;
      }
    }
  }
  return res;
};
