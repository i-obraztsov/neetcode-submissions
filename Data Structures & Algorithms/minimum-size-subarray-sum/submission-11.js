class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let result = Infinity;

        let l = 0;
        let sum = 0;
        
        for (let r = 0; r < nums.length; r++) {
            sum += nums[r];

            while (sum >= target) {
                result = Math.min(result, r - l + 1);
                sum -= nums[l];
                l++;
            }
        }

        return result === Infinity ? 0 : result;
    }
}
