// Distinct elements in window of Size K
// 2 5 5 6 3 2 3 2 4 5 2 2 2 2 3 6
// k = 4

function distinctElementsInWindowOfSizeK(arr, k) {
  let res = [];
  let map = {};
  for (let i = 0; i < k - 1; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }
  for (let j = 0, i = k - 1; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]] = map[arr[i]] + 1;
    } else {
      map[arr[i]] = 1;
    }
    res.push(Object.keys(map).length);

    // remove jth item from map
    if (map[arr[j]] === 1) {
      delete map[arr[j]];
    } else {
      map[arr[j]] = map[arr[j]] - 1;
    }
    j++;
  }
  return res;
}

let ar = [2, 5, 5, 6, 3, 2, 3, 2, 4, 5, 2, 2, 2, 2, 3, 6];
let k = 4;
let res = distinctElementsInWindowOfSizeK(ar, k);
console.log("res", res);
// o/p:  [3, 3, 4, 3, 2, 3, 4, 3, 3, 2, 1, 2, 3]
