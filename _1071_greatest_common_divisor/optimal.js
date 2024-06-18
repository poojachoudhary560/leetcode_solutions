var gcd = function (l1, l2) {
  console.log(l1, l2);
  while (l2 % l1 !== 0) {
    let rem = l2 % l1;
    l2 = l1;
    l1 = rem;
  }
  console.log("l1", l1);
  return l1;
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  let gcdVal = gcd(str1.length, str2.length);
  return str1.substring(0, gcdVal);
};
