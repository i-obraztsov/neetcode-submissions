class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const map = new Map();
        map.set(0, 1);

        let result = 0;
        let sum = 0;

        for (const n of nums) {
            sum += n;
            const diff = sum - k;

            result += map.get(diff) ?? 0;

            map.set(sum, (map.get(sum) ?? 0) + 1);
        }

        return result;
    }
}
