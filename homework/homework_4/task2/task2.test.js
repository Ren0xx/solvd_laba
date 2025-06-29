const { product, getTotalPrice, deleteNonConfigurable } = require('./task2');

describe('product object', () => {
    test('price and quantity are non-enumerable and non-writable', () => {
        const priceDesc = Object.getOwnPropertyDescriptor(product, 'price');
        const qtyDesc = Object.getOwnPropertyDescriptor(product, 'quantity');

        expect(priceDesc.enumerable).toBe(false);
        expect(priceDesc.writable).toBe(false);
        expect(qtyDesc.enumerable).toBe(false);
        expect(qtyDesc.writable).toBe(false);
    });

    test('getTotalPrice returns correct total', () => {
        expect(getTotalPrice(product)).toBe(1000 * 5);
    });

    test('deleteNonConfigurable deletes configurable property', () => {
        //deletion should succeed
        deleteNonConfigurable(product, 'price');
        expect(product.price).toBeUndefined();
    });

    test('deleteNonConfigurable throws on non-configurable property', () => {
        Object.defineProperty(product, 'fixed', {
            value: 42,
            configurable: false,
            writable: true,
            enumerable: true
        });

        expect(() => deleteNonConfigurable(product, 'fixed'))
            .toThrow('This property fixed cannot be deleted');
    });
});
