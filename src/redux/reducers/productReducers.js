import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_RESPONSE,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_RESPONSE,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_RESPONSE,
  PRODUCT_ADD_FAIL,
} from "../constants/productConstants";

export const productAddReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_ADD_REQUEST:
      return { loading: true, success: false };
    case PRODUCT_ADD_RESPONSE:
      return { loading: false, success: true };
    case PRODUCT_ADD_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_LIST_RESPONSE:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_RESPONSE:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
