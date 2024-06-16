import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../../constants/actionTypes';

const INIT_STATE = []; // Initial state for the cart, an empty array

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the product is already in the cart
      const isInCart = state.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      return isInCart
        ? // If the product is in the cart, increase its quantity
          state.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : // If the product is not in the cart, add it with a quantity of 1
          [...state, { ...action.payload, quantity: 1 }];

    case REMOVE_FROM_CART:
      // Find the product to be removed from the cart
      const cartItemToRemove = state.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      return cartItemToRemove.quantity === 1
        ? // If the quantity is 1, remove the product from the cart
          state.filter(
            (cartItem) => cartItem.id !== action.payload.id
          )
        : // If the quantity is greater than 1, decrease its quantity
          state.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );

    default:
      // Return the current state if no actions match
      return state;
  }
};

export default cartReducer;
