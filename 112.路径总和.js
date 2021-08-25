/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    
    const queue = [[root, targetSum]];
    while (queue.length) {
        const [node, sum] = queue.shift();
        const nextSum = sum - node.val;
        if (!node.left && !node.right && nextSum === 0) return true;
        if (node.left) queue.push([node.left, nextSum])
        if (node.right) queue.push([node.right, nextSum])
    }
    return false;
};
// @lc code=end

