class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const s = new Set();
        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            while (r - l > k) {
                s.delete(nums[l]);
                l++;
            }

            if (s.has(nums[r])) {
                return true;
            }

            s.add(nums[r]);
        }

        return false;
    }
}
