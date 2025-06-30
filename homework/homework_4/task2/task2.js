const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
};

Object.defineProperty(product, 'price', {
    enumerable: false,
    writable: false,
    configurable: false
});

Object.defineProperty(product, 'quantity', {
    enumerable: false,
    writable: false,
    configurable: false
});


function getTotalPrice(product) {
    const priceDesc = Object.getOwnPropertyDescriptor(product, "price");
    const quantityDesc = Object.getOwnPropertyDescriptor(product, "quantity");

    return priceDesc.value * quantityDesc.value; // price * desc === total 
}

function deleteNonConfigurable(obj, property) {
    if (obj.hasOwnProperty(property)) {
        const desc = Object.getOwnPropertyDescriptor(obj, property);
        if (desc.configurable) {
            delete obj[property];
            return;
        }
        throw new Error(`This property ${property} cannot be deleted`);
    }
}

module.exports = { product, getTotalPrice, deleteNonConfigurable };
