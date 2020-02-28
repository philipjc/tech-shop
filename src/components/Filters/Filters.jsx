import React, { useContext } from 'react';

import { ShopContext, SORT_LOWEST, SORT_HIGHEST, SORT_ALPHABET, SORT_ALPHABET_BACK } from '../../contexts/ShopContext';

import './Filters.css';

const Filters = () => {
  const { shopListDispatch } = useContext(ShopContext);

  return (
    <div className="Filters">

      <div className="Filters__Lowest filter" onClick={() => shopListDispatch({ type: SORT_LOWEST})}>
        <i className="fas fa-sort-amount-down"></i>
      </div>

      <div className="Filters__Highest filter" onClick={() => shopListDispatch({ type: SORT_HIGHEST})}>
        <i className="fas fa-sort-amount-up"></i>
      </div>

      <div className="Filters__AZ filter" onClick={() => shopListDispatch({ type: SORT_ALPHABET})}>
        <i className="fas fa-sort-alpha-up"></i>
      </div>

      <div className="Filters__ZA filter" onClick={() => shopListDispatch({ type: SORT_ALPHABET_BACK})}>
        <i className="fas fa-sort-alpha-down"></i>
      </div>

    </div>
  );
};

export default Filters;
