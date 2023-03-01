/**
 * @param {string} digits
 * @return {string[]}
 */
var helper = function (i, input, temp, ans, map) {
  if (i === input.length) {
    ans.push(temp.join(""));
    return;
  }
  let str = map[input[i]];
  for (let j = 0; j < str.length; j++) {
    temp.push(str[j]);
    helper(i + 1, input, temp, ans, map);
    temp.pop(str[j]);
  }
};
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let ans = [];
  let temp = [];
  helper(0, digits, temp, ans, map);
  return ans;
};
