class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        let result = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const [start, end] = intervals[i];
            const lastEnd = result.at(-1);

            if (lastEnd[1] >= start) {
                lastEnd[1] = Math.max(end, lastEnd[1]);
            } else {
                result.push(intervals[i]);
            }
        }

        return result;
    }
}
