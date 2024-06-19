/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  // Create prereq => course graph and indegree array (for topological sort)
  const g = new Array(numCourses).fill(null).map(() => []);
  const indegree = new Array(numCourses).fill(0);
  for (const prereq of prerequisites) {
    const [course, prereqCourse] = prereq;
    g[prereqCourse].push(course);
    indegree[course]++;
  }

  // Remove nodes until there's a cycle
  for (let _ = 0; _ < numCourses; _++) {
    const takenCourse = indegree.indexOf(0);
    if (takenCourse === -1) return false;

    indegree[takenCourse] = null;
    for (const neighbor of g[takenCourse]) indegree[neighbor]--;
  }

  return true;
};
