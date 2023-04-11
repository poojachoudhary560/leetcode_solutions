/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  let map = {};
  for (let user of accounts) {
    let [username, ...emailList] = user;
    if (map[username] == undefined) {
      map[username] = [new Set(emailList)];
    } else {
      let existingEmailList = map[username];
      let merge = {};
      for (let i = 0; i < existingEmailList.length; i++) {
        let list = existingEmailList[i];
        for (let email = 0; email < emailList.length; email++) {
          if (list.has(emailList[email])) {
            merge[i] = i;
          }
        }
      }
      let combinedArr = [...emailList];
      let newList = [];
      for (let i = 0; i < existingEmailList.length; i++) {
        if (merge[i] != undefined) {
          combinedArr = [...combinedArr, ...existingEmailList[i]];
        } else {
          newList.push(existingEmailList[i]);
        }
      }
      newList.push(new Set(combinedArr));
      map[username] = newList;
    }
  }
  let res = [];
  for (let i in map) {
    let arrs = map[i];
    for (let j of arrs) {
      j = [...j].sort();

      res.push([i, ...j]);
    }
  }
  return res;
};
