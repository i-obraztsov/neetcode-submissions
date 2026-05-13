class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];

        for (let i = 1; i < strs.length; i++) {
            let j = 0;

            while (j < strs[i].length && strs[i][j] === prefix[j]) {
                j++;
            }

            prefix = prefix.slice(0, j);
        }

        return prefix;
    }
}
