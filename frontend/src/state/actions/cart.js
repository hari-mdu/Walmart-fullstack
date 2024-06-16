import { ADD_TO_CART, REMOVE_FROM_CART } from "../../constants/actionTypes"

// Action creator to add a product to the cart
const addToCart = (product) => {
  return {
    type: ADD_TO_CART, // Action type indicating adding a product to the cart
    payload: product, // The product to be added to the cart
  }
}

// Action creator to remove a product from the cart
const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART, // Action type indicating removing a product from the cart
    payload: product, // The product to be removed from the cart
  }
}

export { addToCart, removeFromCart }
