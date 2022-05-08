// 206. Reverse Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let current = head;
  let previous = null;
  let temp = null;
  while (current !== null) {
    temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  return previous;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let reverse = function (head) {
    if (head === null || head.next === null) {
      return head;
    }
    let newHead = reverse(head.next);
    let headNext = head.next;
    headNext.next = head;
    head = null;
    return newHead;
  };
  let result = reverse(head);
  return result;
};
