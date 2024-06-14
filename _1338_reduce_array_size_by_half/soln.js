/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  let v = [];
  let c = 1;
  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      c++;
    } else {
      v.push(c);
      c = 1;
    }
  }
  v.push(c);
  v.sort();
  let ans = 0;
  let n = arr.length / 2;
  for (let i = v.length - 1; i >= 0; i--) {
    if (n <= 0) {
      break;
    }
    ans++;
    n -= v[i];
  }
  return ans;
};

/**
 * TC: O(nlogn) as we are sorting
 * SC: O(n)
 */
