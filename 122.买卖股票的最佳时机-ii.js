/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const dp = new Array(prices.length)
        .fill(0)
        .map(() => new Array(2).fill(0))
    dp[0][0] = 0;
    dp[0][1] = 0 - prices[0];
     
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
    }
    return dp[prices.length-1][0]
};
// 阴影面积解法
// var maxProfit = function(prices) {
//     let sum = 0;
//     for (let i = 1; i < prices.length; i++) {
//         sum += Math.max(prices[i] - prices[i - 1], 0);
//     }
//     return sum;
// };
// 有交易费用
// var maxProfit = function (prices, fee) {
//     const dp = new Array(prices.length)
//         .fill(0)
//         .map(() => new Array(2).fill(0))
//     dp[0][0] = 0;
//     dp[0][1] = 0 - prices[0] - fee;
     
//     for (let i = 1; i < dp.length; i++) {
//         dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee);
//         dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i] - fee);
//     }
//     return dp[prices.length-1][0];
// };
// @lc code=end

