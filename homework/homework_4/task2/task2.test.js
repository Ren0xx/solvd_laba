const { product, getTotalPrice, deleteNonConfigurable } = require('./task2');

describe('product object', () => {
    test('price and quantity are non-enumerable, non-writable and non-configurable', () => {
        const priceDesc = Object.getOwnPropertyDescriptor(product, 'price');
        const qtyDesc = Object.getOwnPropertyDescriptor(product, 'quantity');

        expect(priceDesc.enumerable).toBe(false);
        expect(priceDesc.writable).toBe(false);
        expect(priceDesc.enumerable).toBe(false);
        expect(qtyDesc.enumerable).toBe(false);
        expect(qtyDesc.writable).toBe(false);
        expect(qtyDesc.configurable).toBe(false);

    });

    test('getTotalPrice returns correct total', () => {
        expect(getTotalPrice(product)).toBe(1000 * 5);
    });

    test('deleteNonConfigurable throws an error on non-configurable properties', () => {

        expect(() => deleteNonConfigurable(product, 'price'))
            .toThrow('This property price cannot be deleted');

        expect(() => deleteNonConfigurable(product, 'quantity'))
            .toThrow('This property quantity cannot be deleted');
    });

    test('deleteNonConfigurable deletes an configurable property successfully', () => {
        Object.defineProperty(product, 'fixed', {
            value: 42,
            configurable: true,
            writable: false,
            enumerable: false,
        });
        deleteNonConfigurable(product, "fixed");
        expect(product.fixed).toBeUndefined();
    });
});
