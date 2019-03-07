// type Primitive =string|number|null|boolean|undefined
// class Stack<T> {
//     items: T[];
//
//     constructor() {
//         this.items = [];
//     }
//
//     push(element: T): void {
//         this.items.push(element);
//     }
//
//     pop(): void | string {
//         if (this.items.length == 0) {
//             return "empty stack";
//         } else this.items.pop();
//     }
//
//     size():number {
//         return this.items.length;
//     }
//
//     toString(): string {
//         return this.items.toString();
//     }
//
//     equals(obj: T[]): boolean {
//         return obj.toString() === this.items.toString();
//
//     }
//
// }
//
// let stackNumber = new Stack < Primitive >();
// stackNumber.push(1);
// stackNumber.push(2);
// stackNumber.push(3);
// stackNumber.push(3);
// stackNumber.push('r');
//
// let a:boolean=stackNumber.equals(['e',2,3]);
// let b:string=stackNumber.toString();
// console.log(b);


//add(T, int index), remove(index), get(int index), size, equals, toString
type Primitive = string | number | null | boolean | undefined

class R<TData> {
    value:TData;
    next:R<TData>
    constructor(value:TData){
        this.value=value;
        this.next=new R<TData>(value);
    }
   }

   class LinkedList<T> {
    private head: R<T>;
    private length: number;

    constructor(value: T) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value: T) {
        let newNode: R<T>=new R<T>(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // toString():string {
    //     let endValue = this.head.value;
    //     let nextObj = this.head.next;
    //     function _recursiveValue():string {
    //         if (nextObj) {
    //             var { value, next} = nextObj;
    //             nextObj = next;
    //             value= value.toString() + _recursiveValue();
    //         }
    //         return value;
    //     }
    //     let stringValue = endValue + _recursiveValue();
    //     return stringValue.slice(0, length - 9);
    // }


    private _removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.length--;

        return value;
    }

    size() {
        return this.length;
    }

    get(val) {
        let thisNode = this.head;

        while (thisNode) {
            if (thisNode.value === val) {
                return thisNode;
            }

            thisNode = thisNode.next;
        }

        return thisNode;
    }

    remove(val) {
        if (this.length === 0) {
            return undefined;
        }

        if (this.head.value === val) {
            return this._removeFromHead();
        }

        let previousNode = this.head;
        let thisNode = previousNode.next;

        while (thisNode) {
            if (thisNode.value === val) {
                break;
            }

            previousNode = thisNode;
            thisNode = thisNode.next;
        }

        if (thisNode === null) {
            return undefined;
        }

        previousNode.next = thisNode.next;
        this.length--;
        return this;
    }

}

const list = new LinkedList('first');
list.addToHead('second');
list.addToHead('third');
// list.remove('second');
const s = list.get('second');

console.log(s);