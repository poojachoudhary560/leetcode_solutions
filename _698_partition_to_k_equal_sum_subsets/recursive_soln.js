/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var helper = function (
  arrItemPosition,
  bucketNumber,
  bucketCurrentSize,
  bucketRequiredSize,
  totalBuckets,
  nums,
  arrItemStatus
) {
  if (bucketNumber === totalBuckets + 1) return true;
  if (bucketCurrentSize === bucketRequiredSize) {
    return helper(
      0,
      bucketNumber + 1,
      0,
      bucketRequiredSize,
      totalBuckets,
      nums,
      arrItemStatus
    );
  }
  if (bucketCurrentSize > bucketRequiredSize) return false;
  if (arrItemPosition >= nums.length) return false;
  if (arrItemStatus[arrItemPosition] === 1) {
    return helper(
      arrItemPosition + 1,
      bucketNumber,
      bucketCurrentSize,
      bucketRequiredSize,
      totalBuckets,
      nums,
      arrItemStatus
    );
  } else {
    bucketCurrentSize += nums[arrItemPosition];
    arrItemStatus[arrItemPosition] = 1;
    let op1 = helper(
      arrItemPosition + 1,
      bucketNumber,
      bucketCurrentSize,
      bucketRequiredSize,
      totalBuckets,
      nums,
      arrItemStatus
    );

    bucketCurrentSize -= nums[arrItemPosition];
    arrItemStatus[arrItemPosition] = 0;
    let op2 = helper(
      arrItemPosition + 1,
      bucketNumber,
      bucketCurrentSize,
      bucketRequiredSize,
      totalBuckets,
      nums,
      arrItemStatus
    );

    return op1 || op2;
  }
};
var canPartitionKSubsets = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % k != 0) return false;
  let requiredsum = sum / k;
  let arrItemStatus = Array(nums.length).fill(0);
  return helper(0, 1, 0, requiredsum, k, nums, arrItemStatus);
};
