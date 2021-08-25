/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    return getDepth(root)
};
var getDepth = function (root, num = 0) {
    if (!root) return num
    
    const lh = getDepth(root.left, num + 1);
    const rh = getDepth(root.right, num + 1);

    return Math.max(lh, rh);
   
}
// @lc code=end

