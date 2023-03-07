/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var dfs = function (s, current, d, map, visited, temp, res) {
  if (!map[s] || !map[d]) {
    return -1;
  }

  if (s === d) {
    return 1;
  }

  if (current === d) {
    return temp;
  }

  visited.add(current);

  for (let list of map[current]) {
    let { pointer, val } = list;
    if (visited.has(pointer)) {
      continue;
    }
    let temp1 = temp;
    temp = temp * val;
    let ans = dfs(s, pointer, d, map, visited, temp, res);
    temp = temp1;
    if (ans) return ans;
  }
  return false;
};
var calcEquation = function (equations, values, queries) {
  let adjList = {};
  for (let i = 0; i < equations.length; i++) {
    let [ai, bi] = equations[i];
    if (adjList[ai]) {
      adjList[ai].push({ pointer: bi, val: values[i] });
    } else {
      adjList[ai] = [{ pointer: bi, val: values[i] }];
    }
    if (adjList[bi]) {
      adjList[bi].push({ pointer: ai, val: 1 / values[i] });
    } else {
      adjList[bi] = [{ pointer: ai, val: 1 / values[i] }];
    }
  }
  let res = [];

  for (let i = 0; i < queries.length; i++) {
    let [qi, qj] = queries[i];
    let visited = new Set();

    let val = dfs(qi, qi, qj, adjList, visited, 1, res);
    if (val) {
      res.push(val);
    } else {
      res.push(-1);
    }
  }
  return res;
};
