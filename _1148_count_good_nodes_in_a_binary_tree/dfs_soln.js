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
var dfs = function (root, min) {
  if (!root) return 0;
  let ans = 0;
  if (root.val >= min) {
    ans++;
    min = root.val;
  }
  return ans + dfs(root.left, min) + dfs(root.right, min);
};
var goodNodes = function (root) {
  let min = -Infinity;
  return dfs(root, min);
};
/**
 * TC O(n)
 */
