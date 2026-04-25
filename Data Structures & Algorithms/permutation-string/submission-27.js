class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Count = Array(26).fill(0);
        const s2Count = Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        let match = 0;

        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                match++;
            }
        }

        for (let l = 0, r = s1.length; r < s2.length; l++, r++) {
            if (match === 26) return true;

            let index = s2.charCodeAt(r) - 97;
            s2Count[index]++;
            if (s1Count[index] === s2Count[index]) {
                match++;
            } else if (s1Count[index] + 1 === s2Count[index]) {
                match--;
            }

            index = s2.charCodeAt(l) - 97;
            s2Count[index]--;
            if (s1Count[index] === s2Count[index]) {
                match++;
            } else if (s1Count[index] - 1 === s2Count[index]) {
                match--;
            }
        }

        return match === 26;
    }
}
