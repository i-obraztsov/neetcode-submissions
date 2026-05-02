class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (this.isAlphanumeric(s[l]) && this.isAlphanumeric(s[r])) {
                if (s[l].toUpperCase() !== s[r].toUpperCase()) {
                    return false;
                }
                l++;
                r--;
            } else {
                if (!this.isAlphanumeric(s[l])) {
                    l++;
                }
                if (!this.isAlphanumeric(s[r])) {
                    r--;
                }
            }
        }

        return true;
    }

    isAlphanumeric(s) {
        return (s >= 'A' && s <= 'Z' ||
            s >= 'a' && s <= 'z' ||
            s >= '0' && s <= '9');
    }
}
