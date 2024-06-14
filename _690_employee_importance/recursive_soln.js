/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var helper = function (id, map) {
  let emp = map[id];
  let importance = emp.importance;
  let subordinates = emp.subordinates;
  for (let i = 0; i < subordinates.length; i++) {
    let sub = subordinates[i];
    importance += helper(sub, map);
  }
  return importance;
};

var GetImportance = function (employees, id) {
  let map = {};
  for (let i of employees) {
    map[i.id] = i;
  }

  let importance = helper(id, map);
  return importance;
};
