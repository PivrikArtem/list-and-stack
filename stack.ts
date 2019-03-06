type Primitive =string|number|null|boolean|undefined
class Stack<T> {
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

    // hashcode():number {
    //     const str:string = this.toString();
    //     return Array.from(str)
    //         .reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)
    // }

    equals(obj: T[]): boolean {
        return obj.toString() === this.items.toString();

    }

}

let stackNumber = new Stack < Primitive >();
stackNumber.push(1);
stackNumber.push(2);
stackNumber.push(3);
stackNumber.push(3);
stackNumber.push('r');

let a:boolean=stackNumber.equals(['e',2,3]);
let b:string=stackNumber.toString();
console.log(b);


