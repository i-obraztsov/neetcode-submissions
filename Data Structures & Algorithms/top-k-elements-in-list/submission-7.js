class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqArr = Array.from({ length: nums.length + 1 }, () => []);

        const map = new Map();
        nums.forEach((n) => {
            map.set(n, (map.get(n) ?? 0) + 1);
        });

        for (const [n, c] of map) {
            freqArr[c].push(n);
        }

        const result = [];
        for (let i = freqArr.length - 1; i > 0; i--) {
            for (const item of freqArr[i]) {
                result.push(item);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
