import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_QTY } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        // If exists => Update the exist item with new 
        return { cartItems: state.cartItems.map(x => x.id === existItem.id ? item : x) }
      } else {
        // If not exists => Add it to cart
        return { cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      const id = action.payload
      return { cartItems: state.cartItems.filter(x => x.id !== id) }
    case CART_UPDATE_QTY:
      const { pid, qty } = action.payload
      const product = state.cartItems.find(x => x.id === pid)
      product.qty = qty
      return { cartItems: state.cartItems.map(x => x.id === pid ? product : x) }
    default:
      return state;
  }
};
