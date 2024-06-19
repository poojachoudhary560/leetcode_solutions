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

var pruneTree = (root) => {
  if (root.left) root.left = pruneTree(root.left);
  if (root.right) root.right = pruneTree(root.right);
  if (!root.left && !root.right && root.val === 0) return null;
  return root;
};
// var pruneTree = function(root) {

//     let pruneFn = (node) => {

//         if(node.left) {
//             node.left = pruneFn(node.left);
//         }

//         if(node.right) {
//             node.right = pruneFn(node.right);
//         }
//         if(!node.left || !node.right || node.val === 0) return null;
//         return node;
//         //         if(node === null) return false;

//     }

//     if(root == null) return null;
//     pruneFn(root);
//     return root;

// };
