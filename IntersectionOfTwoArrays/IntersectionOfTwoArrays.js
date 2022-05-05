// 349. Intersection of Two Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (set.has(nums1[i])) {
      continue;
    }
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        set.add(nums1[i]);
        break;
      }
    }
  }
  return Array.from(set);
};
