/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = candies[0];
  let ans = Array(candies.length);
  for (let i = 1; i < candies.length; i++) {
    max = Math.max(candies[i], max);
  }

  for (let i = 0; i < candies.length; i++) {
    ans[i] = candies[i] + extraCandies >= max;
  }
  return ans;
};
