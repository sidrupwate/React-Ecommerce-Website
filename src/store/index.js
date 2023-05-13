// store.js
import { createStore } from 'redux';
import cartReducer from './cart/cart.reducer';

const store = createStore(cartReducer);

export default store;