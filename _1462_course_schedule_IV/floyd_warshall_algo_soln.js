/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  let arr = Array(numCourses)
    .fill(null)
    .map((item) => Array(numCourses).fill(Infinity));
  for (let i of prerequisites) {
    arr[i[0]][i[1]] = 1;
  }

  for (let k = 0; k < numCourses; k++) {
    for (let i = 0; i < numCourses; i++) {
      for (let j = 0; j < numCourses; j++) {
        arr[i][j] = Math.min(arr[i][j], arr[i][k] + arr[k][j]);
      }
    }
  }
  let ans = [];
  for (let i of queries) {
    if (arr[i[0]][i[1]] != Infinity) {
      ans.push(true);
    } else {
      ans.push(false);
    }
  }
  return ans;
};

/**
 * Floyd Warshall Algorith
 * Time Complexity O(n^3)
 */

/**
 * For DFS/BFS complexity is O((n+E) * n)
 * where n is no of nodes and E is no of edges
 * In worst case no of edges is n^2 so worst case complexity is O(n^3)
 */
