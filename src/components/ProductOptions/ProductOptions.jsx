import React, { useContext } from 'react';

import { CartContext, ADD_ACTION } from '../../contexts/CartContext';

import './ProductOptions.css';

const ProductOptions = props => {
  const { basketDispatch } = useContext(CartContext);

  return (
    <div className="ProductOptions">
      <button className="ProductOptions__Button ProductOptions__Button--add" onClick={() => basketDispatch({ type: ADD_ACTION, payload: {...props} })}>
        ADD TO CART
      </button>
      <button className="ProductOptions__Button ProductOptions__Button--view">
        QUICK VIEW
      </button>
    </div>
  );
};

export default ProductOptions;