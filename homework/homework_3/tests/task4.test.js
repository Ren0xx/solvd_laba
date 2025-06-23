const { calculateFactorial, power } = require('../task4');

describe('calculateFactorial', () => {
    it('computes small factorials correctly', () => {
        expect(calculateFactorial(0)).toBe(1);
        expect(calculateFactorial(1)).toBe(1);
        expect(calculateFactorial(5)).toBe(120);
        expect(calculateFactorial(10)).toBe(3628800);
    });

    it('uses caching and handles larger inputs', () => {
        expect(calculateFactorial(15)).toBe(1307674368000);
    });

    it('throws for non-number', () => {
        expect(() => calculateFactorial('5')).toThrow(TypeError);
        expect(() => calculateFactorial(NaN)).toThrow(TypeError);
    });

    it('throws for negative or non-integer', () => {
        expect(() => calculateFactorial(-1)).toThrow(RangeError);
        expect(() => calculateFactorial(3.5)).toThrow(RangeError);
    });
});

describe('power', () => {
    it('computes powers correctly', () => {
        expect(power(2, 0)).toBe(1);
        expect(power(2, 3)).toBe(8);
        expect(power(5, 4)).toBe(625);
    });

    it('throws for non-number args', () => {
        expect(() => power('2', 3)).toThrow(TypeError);
        expect(() => power(2, '3')).toThrow(TypeError);
    });

    it('throws for non-integer exponent', () => {
        expect(() => power(2, 2.5)).toThrow(RangeError);
    });

    it('throws for negative exponent', () => {
        expect(() => power(2, -1)).toThrow(RangeError);
    });
});
