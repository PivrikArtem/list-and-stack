import {expect} from 'chai';
import { Stack } from '../stack';

// type Primitive = string | number | null | boolean | undefined

describe('Stack', () => {
    it('can be initialized without an initializer', () => {
        const s = new Stack<number>();
        expect(s.size()).to.equal(0);
    });
    it('can be initialized with an initializer', () => {
        const s = new Stack<number>();
        expect(s.size()).to.equal(0);
    });
    it('can be pushed upon', () => {
        const s = new Stack<number>();
        s.push(5);
        s.push(6);
        s.push(6);
        s.push(3);
        expect(s.size()).to.equal(4);
    });
    it('can be popped', () => {
        const s = new Stack<number>();
        s.push(5);
        s.push(6);
        s.push(6);
        s.push(9);
        s.push(6);
        expect(s.pop()).to.equal(6);
        expect(s.size()).to.equal(5);
    });
    it('can be peeked', () => {
        const s = new Stack<number>();
        s.push(5);
        s.push(6);
        s.push(6);
        s.push(6);
        expect(s.toString()).to.equal('ffjfjf');
    });

});