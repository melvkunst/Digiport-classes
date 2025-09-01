// --------------------------
// 1. Discount Function
// --------------------------
// Create a function `discount10(price)` that receives a price
// and returns the price after applying a 10% discount.

function discount10(price) {
  // implement: return discounted price
  return price * 0.9;
}

console.log(discount10(900))

// --------------------------
// 2. Introduction to Classes
// --------------------------
// Create a class Product with:
// - properties: name, price
// - method: describe() returning a string like "Product: Rice, Price: $12"
// Test by creating a few products (e.g., Rice, Beans, Milk)

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price
  }

  describe() {
    return `Product: ${this.name}, Price: $${this.price}`
  }
}

let p1 = new Product('Rice', 4.59)
console.log(p1.describe())
let p2 = new Product('Beans', 7.99)
let p3 = new Product('Water', 1.98)

// --------------------------
// 3. Cart Class + Methods
// --------------------------
// Create a class Cart with:
// - property: products (array)
// - method: add(product) to add a Product
// - method: total() to return the sum of all product prices
// - method: showProducts() to return a string listing all products
// - method: applyDiscount() that applies the `discount10` function
//   to all products' prices using the function you created above

class Cart {
  products = [];
  //product and price

  add(product) {
    this.products.push(product)
  }

  total() {
    /*let sum = 0;
    for(let i=0;i<this.products.length;i++){
        sum+=this.products[i].price
    }
    return sum.toFixed(2);*/

    return this.products.reduce((sum,p)=>sum+p.price,0)
    // implement
  }

  showProducts() {
    return this.products.map(p => p.describe()).join('\n')
    // implement
  }

  applyDiscount() {
    // implement: use discount10 function for all products
    for(let i=0;i<this.products.length;i++){
        this.products[i].price=discount10(this.products[i].price)
    }
    //return `Prices after 10% discount: ${this.products.total()}`
  }
}

let cart1 = new Cart()

cart1.add(p1);
cart1.add(p2);
cart1.add(p3);

console.log(cart1.showProducts())
console.log(cart1.total())
cart1.applyDiscount()
console.log(cart1.showProducts())
console.log(cart1.total())
// --------------------------
// 4. Mini-Project Integration
// --------------------------
// Open index.html and, using ctrl+shift+P, type "Open with Live Server" to preview your shopping cart.
// You can also change the background color or alter the product list in the HTML file.
// Feel free to experiment with different styles and layouts, and also create new functions, buttons, or features!