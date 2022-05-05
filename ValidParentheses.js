// 20. Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      let el = stack.pop();
      if (obj[el] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length > 0 ? false : true;
};
