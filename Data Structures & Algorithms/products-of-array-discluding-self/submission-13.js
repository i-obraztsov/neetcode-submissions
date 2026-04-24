class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = Array(nums.length);
        output[0] = 1;

        for (let i = 1; i < nums.length; i++) {
            output[i] = nums[i - 1] * output[i - 1];
        }

        let postfix = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= postfix;
            postfix *= nums[i]; 
        }

        
        return output;
    }
}
