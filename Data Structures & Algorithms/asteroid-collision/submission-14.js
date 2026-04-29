class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (let a of asteroids) {
            while (stack.length > 0 && a < 0 && stack.at(-1) > 0) {
                const sum = a + stack.at(-1);

                if (sum < 0) {
                    stack.pop();
                } else if (sum > 0) {
                    a = 0;
                } else {
                    stack.pop();
                    a = 0;
                }
            }

            if (a !== 0) {
                stack.push(a);
            }
        }

        return stack;
    }
}
