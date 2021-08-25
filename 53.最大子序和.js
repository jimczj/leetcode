/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心算法，求最优起点
var maxSubArray = function(nums) {
    let sum = 0;
    let max = -Infinity;
    nums.forEach(num => {
        sum = Math.max(num, sum + num);
        max = Math.max(sum, max)
    })
    return max;
};
// @lc code=end

