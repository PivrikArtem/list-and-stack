import {expect} from 'chai';
import {Stack} from '../stack';

// type Primitive = string | number | null | boolean | undefined

describe('Stack', () => {
    it('can be initialized new stack', () => {
        const s = new Stack<number>();
        expect(s.size()).to.equal(0);
    });

    it('can be pushed new item in stack', () => {
        const s = new Stack<number>();
        s.push(5);
        expect(s.size()).to.equal(1);
    });
    it('can be delete item in stack', () => {
        const s = new Stack<number>();
        s.push(5);
        s.push(6);
        s.push(6);
        s.push(9);
        s.pop();
        expect(s.size()).to.equal(3);
    });
    it('if stack is empty , we can not to delete element', () => {
        const s = new Stack<number>();
        expect(s.pop()).to.equal("empty stack");
    });
    it(' can be to know size of stack', () => {
        const s = new Stack<number>();
        s.push(5);
        s.push(6);
        s.push(6);
        s.push(9);
        expect(s.size()).to.equal(4);
    });
    it(' can be do string from elements', () => {
        const s = new Stack<number>();
        s.push(5);
        s.push(6);
        s.push(6);
        s.push(9);
        expect(s.toString()).to.equal('5,6,6,9');
    });
    it(' can be check stack equality to this', () => {
        const s = new Stack<number>();
        s.push(5);
        s.push(6);
        s.push(6);
        s.push(9);
        expect(s.equals([5,6,6,9])).to.equal(true);
    });
    it('can we create stack with different types', () => {
        type Primitive = string | number | boolean
        const s = new Stack<Primitive>();
        s.push(5);
        s.push('MiFort');
        s.push(true);
        expect(s.size()).to.equal(3);
        expect(s.toString()).to.equal('5,MiFort,true');
    });
});