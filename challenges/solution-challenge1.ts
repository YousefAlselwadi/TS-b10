// Practice 1

function calculateProduct(num1: number, num2: number) {
    return num1 + num2;
  }
  
  function getLength(str: string = ""): number {
    return str.length; 
  }
  
  
  // Practice 2
  function logMessage(message: string | boolean) {
    typeof message === 'string' ? console.log('String') : console.log('Boolean')
  }
  
  // Practice 3
  
  // Product -> id, name, price, qty
  // Cart -> products(Product), calucateTotalPrice()
  
  interface Product {
    id: number;
    name: string;
    price: number;
    qty: number;
  }
  
  interface Cart {
    products: Product[] // Array<Product>
    calculcateTotalPrice(): number;
  }
  
  const product1: Product = {
    id: 1,
    name: 'Product1',
    price: 100,
    qty: 2
  }
  
  const product2: Product = {
    id: 2,
    name:'Product2',
    price: 50,
    qty: 6
  }
  
  const cart: Cart = {
    products: [product1, product2],
    calculcateTotalPrice() {
      return this.products.reduce((total: number, product: Product) => total + product.price * product.qty, 0)
    }
  }
  
  console.log(cart.calculcateTotalPrice()); // 500
  
  // Practice 4
  function addToCart(cart: Cart, product: Product): Cart {
    cart.products.push(product);
    return cart;
  
    // cart.products.forEach(p => {
    //   if(p.id === product.id) {
    //     p.qty = p.qty + product.qty
    //   } 
    // })
  }
  
  const product3: Product = {
    id: 3,
    name:'Product3',
    price: 80,
    qty: 2
  }
  addToCart(cart, product3)