type Primitive = string | number | null | boolean | undefined

class N<TData> {
    value: TData;
    next: N<TData>

    constructor(value: TData) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: N<T>;
    private length: number;

    constructor(value: T) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value: T) {
        let newNode: N<T> = new N<T>(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    toString(): string {
        if (!this.head) {
            return 'is Empty';
        }
        let result = '';
        let node = this.head;
        while (node.next != null) {
            result += node.value + ', ';
            node = node.next;
        }
        result += node.value;
        return 'list of: ' + result;
    }


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

    equals(obj: LinkedList<T>): boolean {
        if (this.length !== obj.length) {
            return false;
        }

        let firstList = this.head;
        let secondList = obj.head;

        while (firstList !== null) {
            if (firstList.value !== secondList.value) {
                return false;
            }
            firstList = firstList.next;
            secondList = secondList.next;
        }
        return true;
    }
}
