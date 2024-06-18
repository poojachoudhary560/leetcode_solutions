/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var merge = function (l1, l2) {
  let temp = new ListNode(0);
  let current = temp;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  if (l1 !== null) {
    current.next = l1;
  }
  if (l2 !== null) {
    current.next = l2;
  }
  return temp.next;
};
var mergeKLists = function (lists) {
  if (lists.length == 0) {
    console.log("--", lists.length, lists);
    return null;
  }
  if (lists.length == 1) {
    console.log("--", lists.length, lists);
    return lists[0];
  }
  let result = lists[0];
  for (let i = 1; i < lists.length; i++) {
    result = merge(result, lists[i]);
  }
  return result;
};
