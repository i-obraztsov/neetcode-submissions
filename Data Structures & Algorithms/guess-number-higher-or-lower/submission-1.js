/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l = 1;
        let r = n;

        while (true) {
            const num = Math.floor((r + l) / 2);
            const g = guess(num);

            if (g > 0) {
                l = num + 1;
            } else if (g < 0) {
                r = num - 1;
            } else {
                return num;
            }
        }
    }
}
