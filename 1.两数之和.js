/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = {};
    nums.forEach((num, idx) => {
        numMap[num] = idx;
    })
    const result = [];
    nums.some((num, idx) => {
        const sub = target - num
        if (numMap[sub] !== undefined && numMap[sub] !== idx) {
            result.push(idx, numMap[sub]);
            return true;
        }
    });
    return result;
};
// @lc code=end

