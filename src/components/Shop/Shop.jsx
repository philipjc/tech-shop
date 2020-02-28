import React, { useEffect, useContext } from "react";

import { ShopContext, FETCH_COMPLETE } from "../../contexts/ShopContext";

import Product from "../Product";
import './Shop.css';


const Shop = () => {
  const {productList: { products }, shopListDispatch } = useContext(ShopContext);

  useEffect(() => {
    fetch(
      `https://j-parre.myshopify.com/products.json`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        shopListDispatch({ type: FETCH_COMPLETE, payload: data });
      })
      .catch(error => console.log(`Products fetch error ${error}`));
  }, [shopListDispatch]);

  return products && products.length ? (
    <div className="Shop">
      <div className="Shop__List">
        {products.map(product => <Product key={product.id} {...product} />)}
      </div>
    </div>
  ) : null;
};

Shop.propTypes = {};

export default Shop;