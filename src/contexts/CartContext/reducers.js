export const addToCart = (state, action) => {
  const newAdditionTotal = Number(state.total) + Number(action.payload.price);
  const newAdditionTotalString = String(newAdditionTotal.toFixed(2));
  const calculatedTax = (20 * newAdditionTotal) / 100;

  return {
    items: [
      ...state.items, action.payload,
    ],
    total: newAdditionTotalString,
    tax: calculatedTax.toFixed(2),
  };
};



export const removeFromCart = (state, action) => {
  const newMinusTotal = Number(state.total) - Number(action.payload.price);
  const newMinusTotalString = String(newMinusTotal.toFixed(2));
  const reducedCalculatedTax = (20 * action.payload.price) / 100;
  const reducedTaxCalculation = (state.tax - reducedCalculatedTax.toFixed(2));

  return {
    items: [
      ...state.items.filter(item => item.id !== action.payload.id)
    ],
    total: newMinusTotalString,
    tax: reducedTaxCalculation.toFixed(2),
  };
};
