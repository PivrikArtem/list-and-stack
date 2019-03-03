class Stack {

    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0) {
            return "empty stack";
        } else this.items.pop();
    }

    size() {
        return this.items;
    }

    toString() {
        return this.items.toString();
    }

    hashcode() {
        const str = this.toString();
        return Array.from(str)
            .reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)
    }

    equals(obj) {
               return obj.toString() === this.items.toString();

    }
}

