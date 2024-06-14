/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var flood = function (image, i, j, oldColor, newColor, row, col) {
  if (i < 0 || i === row || j < 0 || j === col || image[i][j] !== oldColor)
    return;
  image[i][j] = newColor;
  flood(image, i + 1, j, oldColor, newColor, row, col);
  flood(image, i - 1, j, oldColor, newColor, row, col);
  flood(image, i, j + 1, oldColor, newColor, row, col);
  flood(image, i, j - 1, oldColor, newColor, row, col);
};
var floodFill = function (image, sr, sc, color) {
  let oldColor = image[sr][sc];
  if (oldColor === color) return image;
  flood(image, sr, sc, oldColor, color, image.length, image[0].length);
  return image;
};
