class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        // "ababd" -> bab
        let start = 0;
        let leng = 0;

        for (let i = 0; i < s.length; i++) {
            let l = i;
            let r = i;

            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > leng) {
                    start = l;
                    leng = r - l + 1;
                }
                l--;
                r++;
            }

            l = i;
            r = i + 1;

            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > leng) {
                    start = l;
                    leng = r - l + 1;
                }
                l--;
                r++;
            }
        
        }

        return s.slice(start, start + leng);
    }
}
