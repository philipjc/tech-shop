import React from 'react';

import { ShopProvider } from './contexts/ShopContext';
import { CartProvider} from './contexts/CartContext';

import Banner from './components/Banner';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Filters from './components/Filters';

import './App.css';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <ShopProvider>
          <Banner />
          <Filters />
          <div className="App__Content container">
            <Shop />
            <Cart />
          </div>
        </ShopProvider>
      </CartProvider>
    </div>
  );
}

export default App;
