/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null;
    if (root === p || root === q) return root;
    
    const r = lowestCommonAncestor(root.right, p, q);
    const l = lowestCommonAncestor(root.left, p, q);
    if (l !==null && r !== null) return root;
    if (l === null) return r;
    return l;
};
// @lc code=end

