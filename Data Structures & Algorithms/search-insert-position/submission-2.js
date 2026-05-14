class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l = 0;
        let r = nums.length;

        while (l < r) {
            let m = l + Math.floor((r - l) / 2);
            if (nums[m] >= target) {
                r = m;
            } else {
                l = m + 1
            }
        }

        return l;
    }
}
