import {expect} from 'chai';
import {LinkedList} from '../linkedList';

// type Primitive = string | number | null | boolean | undefined

describe('Stack', () => {
    it('can be initialized new LinkedList', () => {
        const s = new LinkedList<number>(5);
        expect(s.size()).to.equal(1);
    });

    it('can be added new item in LinkedList', () => {
        const s = new LinkedList<number>(4);
        s.addToHead(5);
        s.addToHead(6);
        expect(s.size()).to.equal(3);
    });
    it('can be delete item in LinkedList', () => {
        const s = new LinkedList<number>(6);
        s.addToHead(5);
        s.addToHead(3);
        s.addToHead(7);
        s.addToHead(8);
        s.addToHead(10);
        s.addToHead(11);
        s.remove(6);
        s.remove(7);
        s.remove(11);
        expect(s.size()).to.equal(4);
    });
    it('if list is empty , we can not to delete element', () => {
        const s = new LinkedList<number>(6);
        s.remove(6);
        expect(s.remove(6)).to.equal("list is empty");
    });
    it('if we do not that have element, we can not to delete that element', () => {
        const s = new LinkedList<number>(6);
        s.addToHead(7);
        expect(s.remove(8)).to.equal(undefined);
    });
    it(' can be to know size of list', () => {
        const s = new LinkedList<number>(6);
        s.addToHead(5);
        s.addToHead(7);
        expect(s.size()).to.equal(3);
    });
    it(' can be do string from elements', () => {
        const s = new LinkedList<number>(6);
        s.addToHead(5);
        s.addToHead(3);
        s.addToHead(2);
        s.addToHead(7);
        expect(s.toString()).to.equal('list of: 7, 2, 3, 5, 6');
    });
    it(' if list is empty , we can not to do string from elements', () => {
        const s = new LinkedList<number>(6);
        s.remove(6);
        expect(s.toString()).to.equal('list is empty');
    });
    it('can be to get element from list', () => {
        const s = new LinkedList<number>(6);
        s.addToHead(5);
        s.addToHead(4);
        s.addToHead(3);
        expect(s.get(5)['value']).to.equal(5);
    });
    it('if we do not have that element, cannot be to get element from list', () => {
        const s = new LinkedList<number>(6);
        s.addToHead(5);
        expect(s.get(7)).to.equal('list do not have this element');
    });
    it(' can be check list equality to this', () => {
        const list = new LinkedList<number>(4);
        list.addToHead(5);
        const list1 = new LinkedList<number>(4);
        list1.addToHead(5);
        expect(list.equals(list1)).to.equal(true);
    });
    it(' can be check list with length not equality our list length ', () => {
        const list = new LinkedList<number>(4);
        list.addToHead(5);
        list.addToHead(6);
        const list1 = new LinkedList<number>(4);
        list1.addToHead(5);
        expect(list.equals(list1)).to.equal(false);
    });
    it(' can be check list with value not equality our list value ', () => {
        const list = new LinkedList<number>(4);
        list.addToHead(5);
        const list1 = new LinkedList<number>(6);
        list1.addToHead(3);
        expect(list.equals(list1)).to.equal(false);
    });
    it('can we create list with different types', () => {
        type Primitive = string | number | boolean
        const s = new LinkedList<Primitive>(6);
        s.addToHead('Mifort');
        s.addToHead(true);
        expect(s.size()).to.equal(3);
        expect(s.toString()).to.equal('list of: true, Mifort, 6');
    });
});