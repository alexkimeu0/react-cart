import { useState } from 'react'
import { Products, Cart } from './components'

import products from './products'

import './App.css';

const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    const item = products.filter(i => i.id === id)
    setCartItems(...cartItems, item)
    console.log(cartItems)
  }

  const removeItem = (id) => {
    let cart = cartItems.filter(i => i.id === id)
    setCartItems(cart)

    console.log(cart)
  }
  
  return (
    <div className="app">
      <Products items={products} addToCart={addToCart} removeItem={removeItem} />
      <Cart items={cartItems} />
    </div>
  );
}

export default App;
