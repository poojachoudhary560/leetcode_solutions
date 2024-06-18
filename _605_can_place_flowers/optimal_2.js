/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    let prev = flowerbed[i - 1] || 0;
    let curr = flowerbed[i];
    let next = flowerbed[i + 1] || 0;

    if (prev === 0 && curr !== 1 && next === 0) {
      count++;
      flowerbed[i] = 1;
    }
  }

  return count >= n;
};
