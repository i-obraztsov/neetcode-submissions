class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const map = new Map();

        for (const n of nums) {
            map.set(n, (map.get(n) ?? 0) + 1);

            if (map.size > 2) {
                for (const [k, v] of map) {
                    if (v > 1) {
                        map.set(k, v - 1);
                    } else {
                        map.delete(k);
                    }
                }
            }
        }

        const res = [];

        for (const [k] of map) {
            const freq = nums.filter(n => n === k).length;

            if (freq > Math.floor(nums.length) / 3) {
                res.push(k)
            }
        }
        return res;
    }
}
