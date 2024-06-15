/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var merge = function (nums1, nums2, res) {
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      res.push(nums1[i]);
      i++;
    } else {
      res.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    res.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    res.push(nums2[j]);
    j++;
  }
  return res;
};
var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArr = [];
  merge(nums1, nums2, mergedArr);
  if (mergedArr.length % 2 === 0) {
    let mid1 = Math.floor((mergedArr.length - 1) / 2);
    let mid2 = Math.floor(mergedArr.length / 2);
    return (mergedArr[mid1] + mergedArr[mid2]) / 2;
  } else {
    let mid = Math.floor(mergedArr.length / 2);
    return mergedArr[mid];
  }
};
