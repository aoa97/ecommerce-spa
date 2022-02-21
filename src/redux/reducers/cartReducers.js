import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (cartItems = [], action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return [...cartItems, action.payload];
    default:
      return cartItems;
  }
};
