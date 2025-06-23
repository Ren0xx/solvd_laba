/**
 * @param {Array.<{name: string, price: number}>} products 
 * @param {number} discount
 * @return {Array.<{name: string, price: number}>} 
 */
function calculateDiscountedPrice(products, discount) {
    if (!Array.isArray(products)) {
        throw new TypeError('Expected products to be an array');
    }
    if (typeof discount !== 'number' || Number.isNaN(discount)) {
        throw new TypeError('Expected discount to be a number');
    }
    return products.map(product => {
        if (
            typeof product !== 'object' ||
            product === null ||
            typeof product.name !== 'string' ||
            typeof product.price !== 'number' ||
            Number.isNaN(product.price)
        ) {
            throw new TypeError(
                'Each product must be { name: string, price: number }'
            );
        }
        const discounted = product.price - product.price * (discount / 100);
        return {
            name: product.name,
            price: parseFloat(discounted.toFixed(2))
        };
    });
}

/**
 * @param {Array.<{name: string, price: number}>} products 
 * @return {number} - total price of the products
 */
function calculateTotalPrice(products) {
    if (!Array.isArray(products)) {
        throw new TypeError('Expected products to be an array');
    }
    return products.reduce((acc, curr) => {
        if (
            typeof curr !== 'object' ||
            curr === null ||
            typeof curr.name !== 'string' ||
            typeof curr.price !== 'number' ||
            Number.isNaN(curr.price)
        ) {
            throw new TypeError(
                'Each product must be { name: string, price: number }'
            );
        }
        return acc + curr.price;
    }, 0);
}

module.exports = { calculateDiscountedPrice, calculateTotalPrice };
