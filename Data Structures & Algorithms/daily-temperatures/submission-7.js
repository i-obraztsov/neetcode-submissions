class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            while (stack.length > 0 && t > stack.at(-1)[0]) {
                const [_, idx] = stack.pop();

                result[idx] = i - idx;
            }

            stack.push([t, i]);
        }

        return result;

    }
}
