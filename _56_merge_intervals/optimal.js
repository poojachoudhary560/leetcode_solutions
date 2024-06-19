/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let current = intervals[0];
  let result = [];
  result.push(current);
  for (let i = 1; i < intervals.length; i++) {
    if (current[1] >= intervals[i][0]) {
      current[0] = Math.min(current[0], intervals[i][0]);
      current[1] = Math.max(current[1], intervals[i][1]);
    } else {
      current = intervals[i];
      result.push(current);
    }
  }
  return result;
};
