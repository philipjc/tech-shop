
// sorting function
function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const bandA = a.title.toUpperCase();
  const bandB = b.title.toUpperCase();

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}


export const fetchComplete = (state, action) => {

  const productListWithAddedPriceProperty = action.payload.products.map(product => {
    return {
      price: product.variants[0].price,
      ...product,
    };
  });

  return {
    ...state,
    products: [
      ...productListWithAddedPriceProperty,
    ],
  };
};


export const sortLowest = (state, action) => {
  return {
    ...state,
    products: [
      ...state.products.sort((a, b) => Number(a.price) - Number(b.price)),
    ],
  };
};


export const sortHighest = (state, action) => {
  return {
    ...state,
    products: [
      ...state.products.sort((a, b) => Number(b.price) - Number(a.price))
    ],
  };
};

export const sortAlphabet = (state, action) => {
  return {
    ...state,
    products: [
      ...state.products.sort(compare),
    ],
  };
};


export const sortAlphabetBack = (state, action) => {
  return {
    ...state,
    products: [
      ...state.products.sort(compare).reverse(),
    ],
  };
};