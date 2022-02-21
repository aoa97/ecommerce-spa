import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (product) => async (dispatch, getState) => {
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: `${product.brand} ${product.model}`,
      qty: 1, //temp
      price: product.price,
      image: product.image,
    },
  });

  // Add to LocalStorage
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
