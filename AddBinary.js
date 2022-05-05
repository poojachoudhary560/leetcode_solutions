// 67. Add Binary
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let numLen = a.length > b.length ? a.length : b.length;
  let diff = a.length - b.length;
  let smallerNo = diff > 0 ? "b" : "a";
  let carry = 0;
  let res = "";
  for (let i = numLen - 1; i >= 0; i--) {
    // let no1 = a[i] ? parseInt(a[i]) : 0;
    let no1 = smallerNo === "a" ? +a[i + diff] || 0 : +a[i] || 0;
    let no2 = smallerNo === "b" ? +b[i - diff] || 0 : +b[i] || 0;
    // let no2 = b[i] ? parseInt(b[i]) : 0;
    let add = no1 + no2 + carry;
    carry = Math.floor(add / 2);
    res = (add % 2) + res;
    // console.log(add, '--', res , '--', carry, '-----', no1, no2)
  }
  return carry === 1 ? carry + res : res;
};
