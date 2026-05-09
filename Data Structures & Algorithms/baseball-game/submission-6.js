class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for (const op of operations) {
            switch (op) {
                case '+': {
                    const prev = stack.pop();
                    const next = prev + stack.at(-1);
                    stack.push(prev, next);
                    break;
                }
                case 'D': {
                    stack.push(stack.at(-1) * 2);
                    break;
                }
                case 'C': {
                    stack.pop();
                    break;
                }
                default: {
                    stack.push(parseInt(op));
                }
            }
        }

        return stack.reduce((acc, curr) => acc + curr, 0);
    }
}
