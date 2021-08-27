/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (!nums.length) return [-1, -1];

    return find(nums, target, 0, nums.length - 1);
};
var find = function (nums, target, start, end) {
    const idx = Math.floor((end + start) / 2);
    if (end === start) {
        if (nums[start] === target) return [start, start];
        return [-1, -1];
    }
    if (nums[idx] === target) {
        const [s, e] = find(nums, target, start, Math.max(idx - 1, start));
        const [s2, e2] = find(nums, target, Math.min(idx + 1, end), end);
        const min = s === -1 ? idx : s;
        const max = e2 === -1 ? idx : e2;
        return [min, max];
    }
    if (nums[idx] > target) {
        return find(nums, target, start, Math.max(idx - 1, start));
    }
    if (nums[idx] < target) {
        return find(nums, target, Math.min(idx + 1, end) , end);
    }
    return [-1, -1];
}
// @lc code=end

