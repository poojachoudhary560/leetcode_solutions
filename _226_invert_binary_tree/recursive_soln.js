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
  // if(t1.left == null && t1.right == null) return null;
  if (t1 == null) return null;
  if (t1.left && t1.right) {
    let temp = t1.left;
    t1.left = helper(t1.right);
    t1.right = helper(temp);
  } else if (t1.left && t1.right == null) {
    t1.right = helper(t1.left);
    t1.left = null;
  } else if (t1.left == null && t1.right) {
    t1.left = helper(t1.right);
    t1.right = null;
  }
  return t1;
};
var invertTree = function (root) {
  let r1 = helper(root);
  return r1;
};
