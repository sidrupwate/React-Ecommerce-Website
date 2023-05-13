// actionTypes.js
export const ADD_TO_CART = 'ADD_TO_CART';

// actions.js
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});