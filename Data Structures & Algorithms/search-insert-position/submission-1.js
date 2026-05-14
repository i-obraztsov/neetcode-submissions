class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        if (target > nums.at(-1)) {
            return nums.length;
        }

        if (target < nums[0]) {
            return 0;
        }
        
        return this.binarySearch(0, nums.length - 1, nums, target);
    }

    binarySearch(l, r, nums, target) {
        const mid = l + Math.floor((r - l) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (target > nums[mid] && target < nums[mid + 1]) {
            return mid + 1;
        }

        return nums[mid] < target ?
            this.binarySearch(mid + 1, r, nums, target) :
            this.binarySearch(l, mid - 1, nums, target)
    }
}
