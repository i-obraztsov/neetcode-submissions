class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (s[l] !== s[r]) {
                return this.isPalindrom(s, l + 1, r) || this.isPalindrom(s, l, r - 1);
            }
            l++;
            r--;
        }
        return true;
    }

    isPalindrom(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }

        return true;
    }
}
