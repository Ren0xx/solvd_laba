const {
    calculateDiscountedPrice,
    calculateTotalPrice
} = require('../task1');

describe('calculateDiscountedPrice', () => {
    const sample = [
        { name: 'A', price: 100 },
        { name: 'B', price: 50 }
    ];

    it('applies discount correctly', () => {
        expect(calculateDiscountedPrice(sample, 20)).toEqual([
            { name: 'A', price: 80 },
            { name: 'B', price: 40 }
        ]);
    });

    it('handles zero discount', () => {
        expect(calculateDiscountedPrice(sample, 0)).toEqual(sample);
    });

    it('throws if products is not array', () => {
        expect(() => calculateDiscountedPrice(null, 10)).toThrow(TypeError);
    });

    it('throws if discount not a number', () => {
        expect(() => calculateDiscountedPrice(sample, '10')).toThrow(TypeError);
    });

    it('throws on invalid product items', () => {
        expect(() =>
            calculateDiscountedPrice([{ name: 'X', price: '90' }], 10)
        ).toThrow(TypeError);
    });
});

describe('calculateTotalPrice', () => {
    const sample = [
        { name: 'A', price: 100 },
        { name: 'B', price: 50 }
    ];

    it('sums prices correctly', () => {
        expect(calculateTotalPrice(sample)).toBe(150);
    });

    it('returns 0 for empty array', () => {
        expect(calculateTotalPrice([])).toBe(0);
    });

    it('throws if products is not array', () => {
        expect(() => calculateTotalPrice('foo')).toThrow(TypeError);
    });

    it('throws on invalid product items', () => {
        expect(() =>
            calculateTotalPrice([{ name: 'X', price: null }])
        ).toThrow(TypeError);
    });
});
;