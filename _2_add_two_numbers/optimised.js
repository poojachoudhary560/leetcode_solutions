/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = l1;
  let carry = 0;
  let tail = null;

  while (l1 != null && l2 != null) {
    let sum = l1.val + l2.val + carry;
    // console.log(sum)
    let val = sum % 10;
    carry = Math.floor(sum / 10);
    l1.val = val;
    tail = l1;
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1 != null) {
    let sum = l1.val + carry;
    let val = sum % 10;
    carry = Math.floor(sum / 10);
    l1.val = val;
    tail = l1;
    l1 = l1.next;
    // l1.val = l1;
  }
  while (l2 != null) {
    let sum = l2.val + carry;
    let val = sum % 10;
    carry = Math.floor(sum / 10);
    let newNode = new ListNode(val);
    tail.next = newNode;
    tail = tail.next;
    l2 = l2.next;
  }
  if (carry) {
    let carryNode = new ListNode(carry);
    tail.next = carryNode;
  }

  return head;
};
