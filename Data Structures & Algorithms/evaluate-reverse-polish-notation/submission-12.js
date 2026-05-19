class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            switch (token) {
                case "+": {
                    const prev = stack.pop();
                    stack.push(prev + stack.pop());
                    break;
                }
                case "*": {
                    const prev = stack.pop();
                    stack.push(prev * stack.pop());
                    break;
                }
                case "-": {
                    const prev = stack.pop();
                    stack.push(stack.pop() - prev);
                    break;
                }
                case "/": {
                    const prev = stack.pop();
                    stack.push(Math.trunc(stack.pop() / prev));
                    break;
                }
                default: {
                    stack.push(parseInt(token));
                }
            }
        }

        return stack.reduce((acc, curr) => acc + curr, 0);
    }
}
