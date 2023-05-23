// Check if array pairs are divisible by k
// 56 22 34 12 78 11 98 69
// k=10

function checkIfArrayPairsAreDivisibleByK(arr, k) {
  let map = {};
  for (let i of arr) {
    let rem = i % k;
    if (map[rem] === undefined) {
      map[rem] = 1;
    } else {
      map[rem] += 1;
    }
  }

  for (let i of arr) {
    let rem = i % k;

    if (rem === 0) {
      if (map[rem] % 2 === 1) return false;
    } else if (rem * 2 === k) {
      if (map[rem] % 2 === 1) return false;
    } else {
      if (map[rem] !== map[k - rem]) {
        return false;
      }
    }
  }
  return true;
}

let ar = [56, 22, 34, 12, 78, 11, 98, 69];
let k = 10;
let res = checkIfArrayPairsAreDivisibleByK(ar, k);
console.log("res", res);
