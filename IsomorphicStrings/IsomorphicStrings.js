// 205. Isomorphic Strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let obj = {};
  let obj2 = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]] && !obj2[t[i]]) {
      obj[s[i]] = t[i];
      obj2[t[i]] = true;
    } else {
      if (obj[s[i]] !== t[i]) return false;
    }
  }
  console.log(obj);
  return true;
};
