const { createCounter, repeatFunction } = require('../task3');

describe('createCounter', () => {
    it('returns a function that increments', () => {
        const c = createCounter();
        expect(c()).toBe(1);
        expect(c()).toBe(2);
        expect(c()).toBe(3);
        expect(c()).toBe(4);
    });

    it('separate instances have independent counts', () => {
        const a = createCounter();
        const b = createCounter();
        expect(a()).toBe(1);
        expect(b()).toBe(1);
        expect(a()).toBe(2);
        expect(b()).toBe(2);
    });

    it('throws if passed any arguments', () => {
        expect(() => createCounter(1)).toThrow(TypeError);
        expect(() => createCounter(() => { })).toThrow(TypeError);
    });
});

describe('repeatFunction', () => {
    it('calls fn the given number of times', () => {
        const calls = [];
        repeatFunction(() => calls.push(true), 3)();
        expect(calls).toHaveLength(3);
    });

    it('does nothing when count is zero', () => {
        const calls = [];
        repeatFunction(() => calls.push(true), 0)();
        expect(calls).toHaveLength(0);
    });

    it('throws if first arg is not a function', () => {
        expect(() => repeatFunction(123, 2)).toThrow(TypeError);
        expect(() => repeatFunction('fn', 2)).toThrow(TypeError);
    });

    it('throws if second arg is not an integer', () => {
        const fn = () => { };
        expect(() => repeatFunction(fn, 2.5)).toThrow(TypeError);
        expect(() => repeatFunction(fn, NaN)).toThrow(TypeError);
        expect(() => repeatFunction(fn, '3')).toThrow(TypeError);
    });

    it('throws if repeat count is negative', () => {
        const fn = () => { };
        expect(() => repeatFunction(fn, -1)).toThrow(RangeError);
    });
});
