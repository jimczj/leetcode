/*
 * @lc app=leetcode.cn id=1839 lang=javascript
 *
 * [1839] 所有元音按顺序排布的最长子字符串
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function (word) {
    const beautifullStr = 'aeiou';
    let maxLength = 0;
    let beautIdx = 0;
    let beautLength = 0;
    for (let i = 0; i < word.length; i++) {
         if (word[i] === beautifullStr[beautIdx]) {
            beautIdx++;
            beautLength++;
        } else if (word[i] === beautifullStr[beautIdx-1]) {
            beautLength++;
         } else {
            beautIdx = 0;
            beautLength = 0
            if (word[i] === beautifullStr[0]) {
                beautLength = 1;
                beautIdx = 1;
            }   
        }
        if (beautIdx === 5) {
            maxLength = Math.max(maxLength, beautLength);
        }
    }
    return maxLength;
};
// @lc code=end

