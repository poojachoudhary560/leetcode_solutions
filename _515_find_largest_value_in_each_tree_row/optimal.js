/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  let op = [];
  let helperFn = (node, level) => {
    if (node == null) return 0;
    if (level === op.length) {
      op.push(node.val);
    } else {
      op[level] = Math.max(op[level], node.val);
    }
    helperFn(node.left, level + 1);
    helperFn(node.right, level + 1);
  };

  helperFn(root, 0);
  return op;
};
