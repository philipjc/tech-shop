import React, { createContext, useReducer } from 'react';

import { sortHighest, sortLowest, fetchComplete, sortAlphabet, sortAlphabetBack } from './reducers';

const FETCH_COMPLETE = 'FETCH_COMPLETE';
const SORT_LOWEST = 'SORT_LOWEST';
const SORT_HIGHEST = 'SORT_HIGHEST';
const SORT_ALPHABET = 'SORT_ALPHABET';
const SORT_ALPHABET_BACK = 'SORT_ALPHABET_BACK';

const initialState = {};

const ShopContext = createContext({});


export const updateShopListReducer = (state, action) => {
  switch (action.type) {
    case FETCH_COMPLETE:
      return fetchComplete(state, action);

    case SORT_LOWEST:
      return sortLowest(state, action);

    case SORT_HIGHEST:
      return sortHighest(state, action);

    case SORT_ALPHABET:
      return sortAlphabet(state, action);

    case SORT_ALPHABET_BACK:
      return sortAlphabetBack(state, action);

    default:
      throw new Error();
  }
};

const ShopProvider = ({ children }) => {

  const [productList, shopListDispatch] = useReducer(updateShopListReducer, initialState);

  const shopState = {
    productList,
    shopListDispatch,
  };

  return (
    <ShopContext.Provider value={shopState}>{children}</ShopContext.Provider>
  )
};

export { ShopContext, ShopProvider, SORT_LOWEST, SORT_HIGHEST, FETCH_COMPLETE, SORT_ALPHABET, SORT_ALPHABET_BACK }
