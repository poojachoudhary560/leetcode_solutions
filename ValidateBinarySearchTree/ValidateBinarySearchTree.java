// 98. Validate Binary Search Tree

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isValidBST(TreeNode root) {
        return valid(root, null, null);
    }
    public boolean valid(TreeNode node, Integer left, Integer right) {
        if(node == null) return true;
        if((right != null && node.val >= right) || (left != null && node.val <= left))
            return false;
        return (valid(node.left, left, node.val) && valid(node.right, node.val, right));
    }
}