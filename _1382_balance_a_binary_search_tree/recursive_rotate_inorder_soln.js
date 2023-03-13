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
var balanceBST = function (root) {
  let v = [];
  let inorder = function (root) {
    if (root === null) return;
    inorder(root.left);
    v.push(root.val);
    inorder(root.right);
  };

  let balance = function (v, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(v[mid]);
    node.left = balance(v, start, mid - 1);
    node.right = balance(v, mid + 1, end);
    return node;
  };

  inorder(root);
  let newTree = balance(v, 0, v.length - 1);
  return newTree;
};

/**
 * TC O(n) for inorder and O(n) for the rotate => O(n)
 * SC O(n) is for the vector
 */
