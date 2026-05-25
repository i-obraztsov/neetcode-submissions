class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = [];

        for (const s of strs) {
            result.push(`${s.length}#${s}`);
        }

        return result.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
            let j = str.indexOf('#', i);
            let leng = parseInt(str.slice(i , j));
            i = j + 1;
            j = i + leng;
            const w = str.slice(i, j);
            result.push(w);
            i = j;
        }

        return result;
    }
}
