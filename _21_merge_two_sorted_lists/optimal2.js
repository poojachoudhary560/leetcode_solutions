/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  }

  let head = null;
  let tail = null;

  while (list1 != null && list2 != null) {
    let temp = null;
    if (list1.val < list2.val) {
      temp = list1;
      list1 = list1.next;
    } else {
      temp = list2;
      list2 = list2.next;
    }
    temp.next = null;
    if (head == null) {
      head = tail = temp;
    } else {
      tail.next = temp;
      tail = temp;
    }
  }

  if (list1 === null) {
    tail.next = list2;
  }

  if (list2 === null) {
    tail.next = list1;
  }
  return head;
};
