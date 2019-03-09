
 export class Stack<T> {
    items: T[];

    constructor() {
        this.items = [];
    }

    push(element: T): void {
        this.items.push(element);
    }

    pop(): void | string {
        if (this.items.length == 0) {
            return "empty stack";
        } else this.items.pop();
    }

    size():number {
        return this.items.length;
    }

    toString(): string {
        return this.items.toString();
    }

     equals(obj: T[]): boolean {
        return obj.toString() === this.items.toString();
    }
}

//
//
// var stackNumber = new Stack();
// stackNumber.push(1);
// stackNumber.push(2);
// stackNumber.push(3);
// stackNumber.push(3);
// stackNumber.push('r');
// var a = stackNumber.equals(['e', 2, 3]);
// var b = stackNumber.toString();
// console.log(b);
