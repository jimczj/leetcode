/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const arr = [- Infinity, - Infinity, - Infinity];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > arr[0]) {
            arr[2] = arr[1];
            arr[1] = arr[0];
            arr[0] = nums[i];
        } else if (nums[i] === arr[0]) {
        } else if (nums[i] > arr[1]) {
            arr[2] = arr[1];
            arr[1] = nums[i];
        } else if (nums[i] === arr[1]) {
        } else if (nums[i] > arr[2]) {
            arr[2] = nums[i];
        }
    }
    return arr[2] === -Infinity ? arr[0] : arr[2];
};
// @lc code=end

