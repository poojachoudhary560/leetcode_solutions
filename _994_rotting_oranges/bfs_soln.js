/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let rottenCount = 0,
    freshCount = 0;
  let m = grid.length;
  let n = grid[0].length;
  let queue = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        freshCount += 1;
      } else if (grid[i][j] === 2) {
        rottenCount += 1;
        queue.push({
          posI: i,
          posJ: j,
          timeStamp: 0,
        });
      }
    }
  }
  let maxTimeStamp = 0;
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (queue.length > 0) {
    let item = queue.shift();
    grid[item.posI][item.posJ] = "#";
    for (let i = 0; i < directions.length; i++) {
      let newX = item.posI + directions[i][0];
      let newY = item.posJ + directions[i][1];
      if (
        newX < 0 ||
        newX === m ||
        newY < 0 ||
        newY === n ||
        grid[newX][newY] !== 1
      )
        continue;
      grid[newX][newY] = 2;
      freshCount--;
      queue.push({
        posI: newX,
        posJ: newY,
        timeStamp: item.timeStamp + 1,
      });

      maxTimeStamp = Math.max(maxTimeStamp, item.timeStamp + 1);
    }
  }
  if (freshCount > 0) return -1;
  return maxTimeStamp;
};
