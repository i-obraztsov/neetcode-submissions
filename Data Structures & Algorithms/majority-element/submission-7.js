class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let counter = 0;
        let result = 0;

        for (let i = 0; i < nums.length; i++) {
            if (counter === 0) {
                result = nums[i];
            }

            counter += nums[i] === result ? 1 : -1;
        }


        return result;
    }
}
