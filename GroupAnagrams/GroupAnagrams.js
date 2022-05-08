// 49. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let res = [];
  res.push([strs[0]]);
  for (let i = 1; i < strs.length; i++) {
    let anagramFound = false;
    for (let j = 0; j < res.length; j++) {
      if (isAnagram(strs[i], res[j][0])) {
        res[j].push(strs[i]);
        anagramFound = true;
        break;
      }
    }
    if (!anagramFound) {
      res.push([strs[i]]);
    }
  }
  return res;
};

var isAnagram = function (a, b) {
  if (a.length !== b.length) return false;
  let objA = {};
  for (let i = 0; i < a.length; i++) {
    if (!objA[a[i]]) {
      objA[a[i]] = 1;
    } else {
      objA[a[i]] += 1;
    }
  }
  for (let j = 0; j < b.length; j++) {
    if (objA[b[j]]) {
      objA[b[j]] -= 1;
      if (objA[b[j]] === 0) {
        delete objA[b[j]];
      }
    } else {
      return false;
    }
  }
  return Object.keys(objA).length === 0 ? true : false;
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(strs);
