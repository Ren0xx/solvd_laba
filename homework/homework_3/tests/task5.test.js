const { lazyMap, fibonacciGenerator } = require('../task5');

describe('lazyMap', () => {
    it('applies function lazily and signals done', () => {
        const arr = [1, 2, 3];
        const it = lazyMap(arr, x => x * 10);
        expect(it.next()).toEqual({ value: 10, done: false });
        expect(it.next()).toEqual({ value: 20, done: false });
        expect(it.next()).toEqual({ value: 30, done: false });
        expect(it.next()).toEqual({ done: true });
    });

    it('throws on invalid args', () => {
        expect(() => lazyMap(null, () => { })).toThrow(TypeError);
        expect(() => lazyMap([1, 2, 3], 'fn')).toThrow(TypeError);
    });

    it('does not go past done', () => {
        const it = lazyMap([], x => x);
        expect(it.next()).toEqual({ done: true });
        expect(it.next()).toEqual({ done: true });
    });
});

describe('fibonacciGenerator', () => {
    it('yields Fibonacci sequence indefinitely', () => {
        const it = fibonacciGenerator();
        const seq = [];
        for (let i = 0; i < 7; i++) {
            seq.push(it.next().value);
        }
        expect(seq).toEqual([0, 1, 1, 2, 3, 5, 8]);
    });

    it('throws if passed any arguments', () => {
        expect(() => fibonacciGenerator(1)).toThrow(TypeError);
        expect(() => fibonacciGenerator('x')).toThrow(TypeError);
    });
});
