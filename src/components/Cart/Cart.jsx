import React, {useContext} from 'react';
import {CartContext, REMOVE_ACTION} from '../../contexts/CartContext';

import './Cart.css';

const CartItem = ({id, title, price, size}) => {
  const {basketDispatch} = useContext(CartContext);

  return (
    <div className="Cart__Item" data-id={id}>
      <div className="Cart__Item-size"><p>{size}</p></div>
      <div className="Cart__Item--title"><p>{title}</p></div>
      <div className="Cart__Item--cost">{price}
        <div onClick={() => basketDispatch({type: REMOVE_ACTION, payload: {id, title, price, size}})}>
          <i className="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};


const Cart = () => {
  const { basket } = useContext(CartContext);
  const { items, total, tax } = basket;
  const numberOfBasketItems = basket && basket.items.length;

  return (
    <div className="Cart">
      <div className="Cart__Items">
        Your Cart Items.
      </div>
      <div className="Cart__List">
        {items && items.map(item => <CartItem key={item.id} {...item} />)}
      </div>
      <div className="Cart__Total">
        <div className="Cart__Total-quantity">
          <p>Number of items: {basket && basket.items.length ? numberOfBasketItems : null}</p>
        </div>
        <div className="Cart__Total-info">
          <p>Total:</p><span>{total ? `£${total}` : '£0.00'}</span>
        </div>
        <div className="Cart__Total-sub-info">VAT: 20% { tax > 0 ? `£${tax}` : null}</div>
      </div>
    </div>
  );
};

export default Cart;