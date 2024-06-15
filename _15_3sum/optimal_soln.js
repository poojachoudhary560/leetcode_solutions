/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let isUnique = new Set();
  nums.sort((a, b) => a - b);
  let target = 0;
  let ans = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let newTarget = target - nums[i];

    let leftIndex = i + 1;
    let rightIndex = nums.length - 1;
    while (leftIndex < rightIndex) {
      if (nums[leftIndex] + nums[rightIndex] < newTarget) {
        leftIndex++;
      } else if (nums[leftIndex] + nums[rightIndex] > newTarget) {
        rightIndex--;
      } else {
        if (
          !isUnique.has(
            nums[i] + "-" + nums[leftIndex] + "-" + nums[rightIndex]
          )
        ) {
          ans.push([nums[i], nums[leftIndex], nums[rightIndex]]);
          isUnique.add(
            nums[i] + "-" + nums[leftIndex] + "-" + nums[rightIndex]
          );
        }

        leftIndex++;
        rightIndex--;
      }
    }
  }
  return ans;
};
