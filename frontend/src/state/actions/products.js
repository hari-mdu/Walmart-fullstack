import { SET_PRODUCTS } from "../../constants/actionTypes"

// Action creator to set the list of products
const setProducts = (products) => {
  return {
    type: SET_PRODUCTS, // Action type indicating setting products in the state
    payload: products, // The list of products to be set in the state
  }
}

export { setProducts }
