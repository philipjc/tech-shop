import React, { createContext, useReducer } from 'react';

import { addToCart, removeFromCart } from './reducers';

const CartContext = createContext({});

const REMOVE_ACTION = 'REMOVE';
const ADD_ACTION = 'ADD';


const initialState = {
  items: [],
  total: '',
  tax: 0,
};

export const updateBasketReducer = (state, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return addToCart(state, action);

    case REMOVE_ACTION:
      return removeFromCart(state, action);

    default:
      throw new Error();
  }
};


const CartProvider = ({ children }) => {
  const [basket, basketDispatch] = useReducer(updateBasketReducer, initialState);

  const shopState = {
    basket,
    basketDispatch,
  };

  return (
    <CartContext.Provider value={shopState}>{children}</CartContext.Provider>
  )
};

export { CartContext, CartProvider, REMOVE_ACTION, ADD_ACTION }
