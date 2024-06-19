/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var dfs = function (adj_list, visited, vertex) {
  if (visited[vertex] == 1) return false;
  visited[vertex] = 1;
  for (let ad of adj_list[vertex]) {
    //  console.log(ad, "ad")
    if (!dfs(adj_list, visited, ad)) {
      return false;
    }
  }
  visited[vertex] = 2;
  return true;
};

var canFinish = function (numCourses, prerequisites) {
  let adj_list = Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    adj_list[i] = Array();
  }
  for (let pre of prerequisites) {
    // console.log(pre, pre[0], pre[1])
    adj_list[pre[0]].push(pre[1]);
  }

  // console.log(adj_list)

  let visited = Array(numCourses).fill(0);
  for (i = 0; i < numCourses; i++) {
    if (visited[i] == 0 && !dfs(adj_list, visited, i)) return false;
  }
  return true;
};
