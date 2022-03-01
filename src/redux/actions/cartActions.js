import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_QTY,
} from "../constants/cartConstants";

export const addToCart = (product, qty) => async (dispatch, getState) => {
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: product.id,
      name: `${product.brand} ${product.model}`,
      price: product.price,
      image: product.image,
      countInStock: product.countInStock,
      qty,
    },
  });

  // Add to LocalStorage
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const deleteCartItem = (product) => async (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: product });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const updateCartItemQty =
  (product, qty) => async (dispatch, getState) => {
    dispatch({ type: CART_UPDATE_QTY, payload: { pid: product, qty } });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  };
