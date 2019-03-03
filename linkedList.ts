//add(T, int index), remove(index), get(int index), size, equals, hashcode, toString
class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    toString(){
        var returnValue = String(this.head);
        if (this.get().next) {
            returnValue = returnValue + "-> " + String(this.next);
        }
        return returnValue;
    }

    _removeFromHead() {
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

        while(thisNode) {
            if(thisNode.value === val) {
                return thisNode;
            }

            thisNode = thisNode.next;
        }

        return thisNode;
    }

    remove(val) {
        if(this.length === 0) {
            return undefined;
        }

        if (this.head.value === val) {
            return this._removeFromHead();
        }

        let previousNode = this.head;
        let thisNode = previousNode.next;

        while(thisNode) {
            if(thisNode.value === val) {
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

const list =new LinkedList('first');
list.addToHead('second');
list.addToHead('third');
// list.remove('second');
const s =list.get('second');

console.log(s);