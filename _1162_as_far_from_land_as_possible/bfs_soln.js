/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  let n = grid.length;
  let queue = [];
  let maxDistance = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push({
          posI: i,
          posJ: j,
        });
      }
    }
  }
  while (queue.length > 0) {
    let item = queue.shift();
    let directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let i = 0; i < directions.length; i++) {
      let posX = item.posI + directions[i][0];
      let posY = item.posJ + directions[i][1];
      if (
        posX < 0 ||
        posX === n ||
        posY < 0 ||
        posY === n ||
        grid[posX][posY] !== 0
      )
        continue;
      queue.push({
        posI: posX,
        posJ: posY,
      });
      grid[posX][posY] = grid[item.posI][item.posJ] + 1;
      maxDistance = Math.max(maxDistance, grid[posX][posY]);
    }
  }
  return maxDistance - 1;
};
