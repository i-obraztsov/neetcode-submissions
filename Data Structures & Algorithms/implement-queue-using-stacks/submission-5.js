class Stack {
    constructor() {
        this.stack = [];
    }

    push(x) {
        this.stack.push(x);
    }

    pop() {
        return this.stack.pop();
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    top() {
        return this.stack.at(-1);
    }
}

class MyQueue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        while (!this.s1.isEmpty()) {
            this.s2.push(this.s1.pop());
        }

        this.s1.push(x);

        while (!this.s2.isEmpty()) {
            this.s1.push(this.s2.pop());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.s1.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        return this.s1.top();
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.s1.isEmpty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
