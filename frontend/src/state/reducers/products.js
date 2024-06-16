import { SET_PRODUCTS } from '../../constants/actionTypes';

const INIT_STATE = []; // Initial state for the products, an empty array

const productsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      // Replace the current state with the new list of products from the action payload
      return [...action.payload];

    default:
      // Return the current state if no actions match
      return state;
  }
};

export default productsReducer;
