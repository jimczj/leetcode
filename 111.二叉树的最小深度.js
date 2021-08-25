/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
    if (!root) return 0;
    
    const queue = [[root, 1]];

    while (queue.length) {
        const [node, dep] = queue.shift();
        if (!node.left && !node.right) return dep;

        if (node.left) queue.push([node.left, dep + 1]);
        if (node.right) queue.push([node.right, dep + 1]);
    }
    return 0;
};
// @lc code=end

