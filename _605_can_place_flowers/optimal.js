/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let max = 0;
  let firstIndex = -1;
  let lastIndex = -1;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      continue;
    } else if (firstIndex === -1) {
      firstIndex = i;
      lastIndex = i;
    } else {
      lastIndex = i;
    }
  }

  // all zeros
  if (firstIndex === -1) {
    return n <= Math.floor((flowerbed.length + 1) / 2);
  }

  max = Math.floor(firstIndex / 2); // left
  max += Math.floor((flowerbed.length - lastIndex - 1) / 2); // right
  if (lastIndex === firstIndex) {
    return n <= max;
  }
  // middle
  let count = 0;
  for (let i = firstIndex + 1; i <= lastIndex - 1; i++) {
    if (flowerbed[i] === 0) {
      count++;
    } else {
      max += Math.floor((count - 1) / 2);
      count = 0;
    }
  }
  max += Math.floor((count - 1) / 2);
  return n <= max;
};
