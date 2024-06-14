/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  let l = 0,
    r = 1000001;
  while (l < r) {
    let Limit = Math.floor((l + r) / 2);
    if (isGood(heights, Limit)) {
      r = Limit;
    } else {
      l = Limit + 1;
    }
  }
  return l;
};

var isGood = function (h, Limit) {
  let R = h.length;
  let C = h[0].length;
  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let queue = [];
  let visited = Array(R)
    .fill(null)
    .map(() => Array(C));
  queue.push([0, 0]);
  while (queue.length > 0) {
    let [x, y] = queue.shift();
    if (x == R - 1 && y == C - 1) return true;
    for (let d of dir) {
      let nx = d[0] + x;
      let ny = d[1] + y;
      if (nx >= 0 && ny >= 0 && nx < R && ny < C && !visited[nx][ny]) {
        if (Math.abs(h[x][y] - h[nx][ny]) <= Limit) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
  return false;
};

/**
 * TC: O(R*C* log 10^6)
 */
