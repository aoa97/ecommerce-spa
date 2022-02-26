import { collection, getDocs } from "firebase/firestore";
import { firebaseDB as db } from "../../firebaseConfig";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_RESPONSE,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_RESPONSE,
  PRODUCT_DETAILS_FAIL
} from "../constants/productConstants";
import products from "../../productData"; // Temp

export const getProducts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      // Fetch products from the DB
      // const productsRef = collection(db, "products");
      // const products = await getDocs(productsRef);
      // dispatch({ type: PRODUCT_LIST_RESPONSE, payload: products.docs });

      dispatch({ type: PRODUCT_LIST_RESPONSE, payload: products });
    } catch (e) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: "Error" });
    }
  };
};

export const getProductDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });

      // Temp sol
      const product = products.find(p => p.id === Number(id))
      // Fetch products from the DB

      dispatch({ type: PRODUCT_DETAILS_RESPONSE, payload: product });
    } catch (e) {
      dispatch({ type: PRODUCT_DETAILS_FAIL, payload: "Error" });
    }
  };
};
