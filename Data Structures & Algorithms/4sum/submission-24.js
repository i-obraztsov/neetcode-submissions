class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);
        const result = [];
        for (let a = 0; a < nums.length; a++) {
            if (a > 0 && nums[a] === nums[a - 1]) continue;

            for (let b = a + 1; b < nums.length; b++) {
                if (b > a + 1 && nums[b] === nums[b - 1]) continue;
                let c = b + 1;
                let d = nums.length - 1;

                while (c < d) {
                    const sum = nums[a] + nums[b] + nums[c] + nums[d];
                    if (sum === target) {
                        result.push([nums[a], nums[b], nums[c], nums[d]]);
                        c++;
                        d--;

                        while (c < d && nums[c] === nums[c - 1]) {
                            c++;
                        }

                        while (c < d && nums[d] === nums[d + 1]) {
                            d--;
                        }
                    } else if (sum < target) {
                        c++;
                    } else {
                        d--;
                    }
                }
            }
        }

        return result;
    }
}
