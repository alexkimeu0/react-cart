import { Products, Cart } from './components'

import products from './products'

import './App.css';

const App = () => {
  
  return (
    <div className="app">
      <Products items={products} />
      <Cart />
    </div>
  );
}

export default App;
