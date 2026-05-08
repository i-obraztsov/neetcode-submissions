class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === ']') {
                let subS = [];
                while (stack.length > 0 && stack.at(-1) !== '[') {
                    subS.push(stack.pop()); 
                }
                if (stack.at(-1) === '[') {
                    stack.pop();
                }
                let countRepeat = [];
                while (stack.length > 0 && isFinite(parseInt(stack.at(-1)))) {
                    countRepeat.push(stack.pop()); 
                }
                const counter = parseInt(countRepeat.reverse().join(''))
                const newStr = subS.reverse().join('').repeat(counter);

                stack.push(newStr);

            } else {
                stack.push(s[i]);
            }
        }

        return stack.join('');
    }
}
