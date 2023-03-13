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
 * @return {number}
 */

var maxProduct = function (root) {
  let total = 0;
  let maxx = 0;
  var treeTotal = function (root) {
    if (root == null) return 0;
    return treeTotal(root.left) + treeTotal(root.right) + root.val;
  };
  var maxProductHelper = function (root) {
    if (root == null) return 0;
    let l = maxProductHelper(root.left);
    let r = maxProductHelper(root.right);
    let up = total - l - r - root.val;

    let op1 = (root.val + l + r) * up;
    let op2 = (root.val + up + l) * r;
    let op3 = (root.val + up + r) * l;
    let temp = Math.max(op1, op2, op3);
    maxx = Math.max(temp, maxx);
    return l + r + root.val;
  };
  total = treeTotal(root);
  maxProductHelper(root);
  return maxx % 1000000007;
};
