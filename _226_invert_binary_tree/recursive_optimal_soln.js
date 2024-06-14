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
 * @return {TreeNode}
 */
var helper = function (t1) {
  if (t1 == null) return null;
  helper(t1.left);
  helper(t1.right);
  let temp = t1.left;
  t1.left = t1.right;
  t1.right = temp;
};
var invertTree = function (root) {
  helper(root);
  return root;
};
