/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let current = head;
  let total = 0;
  while (current != null) {
    total++;
    current = current.next;
  }
  let a = total - n;
  console.log(a, total);
  if (a == 0) {
    head = head.next;
    return head;
  }
  let currentNode = head;
  while (a != 1) {
    currentNode = currentNode.next;
    a--;
  }

  if (currentNode.next && currentNode.next.next) {
    currentNode.next = currentNode.next.next;
  } else {
    currentNode.next = null;
  }

  return head;
};
