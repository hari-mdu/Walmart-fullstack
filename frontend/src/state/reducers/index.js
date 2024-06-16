import productsReducer from './products';
import cartReducer from './cart';
import { combineReducers } from 'redux';

// Combine the products and cart reducers into a single root reducer
const rootReducer = combineReducers({
  products: productsReducer, // Handles the products state
  cart: cartReducer // Handles the cart state
});

export default rootReducer;
