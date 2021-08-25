/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return getDepth(root) !== -1
};
var getDepth = function (root, num = 0) {
    if (!root) return num
    
    const lh = getDepth(root.left, num + 1);
    const rh = getDepth(root.right, num + 1);
    if (Math.abs(lh - rh) > 1) return -1;

    return Math.max(lh, rh);
   
}
// @lc code=end

