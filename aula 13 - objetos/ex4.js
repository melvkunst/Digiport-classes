// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.

market = [
    {name: "Rice", price: 7.99},
    {name: "Beans", price: 5.50},
    {name: "Chocolate", price: 6.50}
]

for(let product of market){
    console.log(`Product ${product.name}: R$${product.price}`)
}

