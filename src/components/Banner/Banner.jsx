import React, {useContext} from 'react';

import Image from "../Image";
import {CartContext} from "../../contexts/CartContext";

import bannerImage from "../../assets/header.jpg";
import logoImage from "../../assets/dragon-logo.png";

import {bannerImageStyles} from "../../styles/bannerImageStyles";
import './Banner.css';

const Banner = () => {
  const {basket} = useContext(CartContext);

  return (
    <div className="Banner">

      <div className="Banner__Top">

        <div className="Logo">
          <Image src={logoImage} name="dragon-logo" alt="Shop logo" styles={{height: '40px'}}/> Dragon Shop
        </div>

        <div className="Banner__Details">
          <div className="MiniCart">
            <i className="fas fa-shopping-cart"></i>
            <span className="MiniCart__Total">{basket.total.length ? `£${basket.total}` : null}</span>
            {basket.items.length ? (
              <span className="MiniCart__Quantity">{basket.items.length}</span>
            ) : null
            }
          </div>

          <div className="Menu">
            <i className="fas fa-bars"></i>
          </div>
        </div>

      </div>

      <Image
        name="Banner__image"
        src={bannerImage}
        styles={bannerImageStyles}
        alt="Application banner"
      />
    </div>
  );
};

export default Banner;