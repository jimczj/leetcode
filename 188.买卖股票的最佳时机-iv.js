/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */
// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const profits = [];
    let p = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profits[p] = (profits[p] || 0) + prices[i] - prices[i - 1];
        } else if (prices[i] < prices[i - 1] && profits[p] > 0) {
            p ++;
        }
    }
    let result = 0;
    profits.sort((a, b) => b - a).some(item => {
        result += item;
        k--;
        if (k === 0) return true;
    });
    return result;
};
console.log(maxProfit(2, [1,2,4,2,5,7,2,4,9,0]))
// @lc code=end

