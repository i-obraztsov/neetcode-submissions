class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let result = 0;

        let l = 0;
        let r = 1;

        while (r < prices.length) {
            if (prices[r] > prices[l]) {
                result = Math.max(result, prices[r] - prices[l]);
            } else {
                l = r;
            }
            r++;
        }

        return result;
    }
}
