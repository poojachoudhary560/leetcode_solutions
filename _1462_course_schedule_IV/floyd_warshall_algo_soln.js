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
