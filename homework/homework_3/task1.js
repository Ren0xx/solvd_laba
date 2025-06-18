// 1.
/**
 * 
 * @param {Array.<{name: string, price: number}>} products 
 * @param {number} discount
 * @return {Array.<{name: string, price: number}>} 
 */
function calculateDiscountedPrice(products, discount) {
    const discountedProducts = products.map((product) => {
        return {
            name: product.name,
            price: Number.parseFloat((product.price - product.price * (discount / 100)).toFixed(2))
        };
    });
    return discountedProducts;
}
// 2.
/**
 * 
 * @param {Array.<{name: string, price: number}>} products 
 * @return {number} - total price of the products
 */
function calculateTotalPrice(products) {
    const totalPrice = products.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);
    return totalPrice;
}

const products = [
    { name: "Laptop", price: 999 },
    { name: "Smartphone", price: 699 },
    { name: "Headphones", price: 199 },
    { name: "Keyboard", price: 89 },
    { name: "Mouse", price: 49 },
    { name: "Monitor", price: 299 },
    { name: "Tablet", price: 399 },
    { name: "Camera", price: 599 },
    { name: "Speaker", price: 129 },
    { name: "Smartwatch", price: 249 }
];

console.log(calculateTotalPrice(products));

console.log(calculateDiscountedPrice(products, 20));
console.log(calculateDiscountedPrice(products, 50));