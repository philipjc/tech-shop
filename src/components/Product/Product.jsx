import React from 'react';
import Image from "../Image";
import ProductOptions from "../ProductOptions";

import './Product.css';

const Product = ({ id, images, title, vendor, variants, options }) => {
  const firstVariant = variants[0];
  const firstOption = options[0];

  const { price } = firstVariant;
  const { values } = firstOption;
  const smallSize = values[0];
  const productItem = { id, title, price, size: smallSize };

  return (
    <div className="Product">
      <div className="Product__Image">
        <Image src={images[0].src} />
      </div>
      <div className="Product__Info">
        <p>{title}</p><span>{`£${price}`}</span>
      </div>
      <ProductOptions {...productItem} />
    </div>
  );
};

export default Product;
