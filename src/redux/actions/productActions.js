import { collection, getDocs } from "firebase/firestore";
import { firebaseDB as db } from "../../firebaseConfig";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_RESPONSE,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

export const getProducts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      // Fetch products from the DB
      const productsRef = collection(db, "products");
      const products = await getDocs(productsRef);

      dispatch({ type: PRODUCT_LIST_RESPONSE, payload: products.docs });
    } catch (e) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: "Error" });
    }
  };
};
