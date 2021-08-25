/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let min = prices[0];
    let result = [0];
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        result[i] = Math.max(result[i - 1], prices[i] - min);
        max = Math.max(result[i], max);
    }
    return max;
};
// @lc code=end

