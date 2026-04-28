class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        return this.mergeArray(nums);
    }

    mergeArray(arr) {
        if (arr.length < 2) return arr;

        const middle = Math.floor(arr.length / 2);

        return this.merge(
            this.mergeArray(arr.slice(0, middle)),
            this.mergeArray(arr.slice(middle))
        )
    }

    merge(left, right) {
        const result = [];

        let l = 0;
        let r = 0;

        while (l < left.length && r < right.length) {
            if (left[l] < right[r]) {
                result.push(left[l]);
                l++;
            } else {
                result.push(right[r]);
                r++;
            }
        }

        return result.concat(left.slice(l)).concat(right.slice(r))
    }
}
