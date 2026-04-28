class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let l = 0;
        let r = nums.length - 1;
        let result = [];
        let i = nums.length - 1;

        while (i >= 0) {
            if (Math.abs(nums[l]) > Math.abs(nums[r])) {
                result[i] = nums[l] ** 2;
                l++;
            } else {
                result[i] = nums[r] ** 2;
                r--;
            }
            i--;
        }

        return result;
    }
}
