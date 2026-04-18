class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];
        const arr = path.split('/');

        for (const part of arr) {
            if (part === '.' || part === '') continue;

            if (part === '..') {
                stack.pop();
            } else {
                stack.push(part);
            }
        }

        return `/${stack.join('/')}`
    }
}
