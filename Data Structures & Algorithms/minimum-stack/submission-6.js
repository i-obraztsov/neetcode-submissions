class MinStack {
    constructor() {
        this.stack = [];
        this.indexes = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push(val);
            this.indexes.push(0);
            return;
        }

        const lastMin = this.stack[this.indexes.at(-1)];
        if (val < lastMin) {
            this.indexes.push(this.stack.length);
        }

        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();

        if (this.stack[this.indexes.at(-1)] === undefined) {
            this.indexes.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.indexes.at(-1)];
    }
}
