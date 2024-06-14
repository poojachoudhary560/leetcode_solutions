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
var dfs = function (root, count) {
  if (!root) return 0;
  if (root.left == null && root.right == null) {
    let c = 0;
    count[root.val]++;
    // console.log(JSON.stringify([...count]));
    for (let i = 0; i < count.length; i++) {
      if (count[i] % 2 === 1) {
        c++;
      }
    }
    count[root.val]--;
    if (c > 1) {
      return 0;
    }
    return 1;
  } else {
    count[root.val]++;
    let ans = dfs(root.left, count) + dfs(root.right, count);
    count[root.val]--;
    return ans;
  }
};
var pseudoPalindromicPaths = function (root) {
  let count = Array(10).fill(0);
  return dfs(root, count);
};

/**
 *
 * Time Complexity in this case is the no of nodes
 * No of nodes = 10^5 => O(n)
 */
