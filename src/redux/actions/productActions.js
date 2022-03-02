import { collection, getDocs, addDoc, doc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebaseConfig";
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

// Admin
export const addProduct = (product) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_ADD_REQUEST });

      // Upload image to storage
      const { image: imageFile } = product;
      const imageRef = ref(storage, `products/${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);

      // Insert into firestore
      const productsRef = collection(db, "products");
      product.image = imageUrl;
      product.price = Number(product.price);
      product.countInStock = Number(product.countInStock);
      await addDoc(productsRef, product);

      dispatch({ type: PRODUCT_ADD_RESPONSE });
    } catch (e) {
      console.log(e.message);
      dispatch({ type: PRODUCT_ADD_FAIL, payload: e.message });
    }
  };
};

export const getProducts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      // Fetch products from the DB
      const productsRef = collection(db, "products");
      const products = await getDocs(productsRef);
      dispatch({ type: PRODUCT_LIST_RESPONSE, payload: products.docs });
    } catch (e) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: e.message });
    }
  };
};

export const getProductDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });

      const productRef = doc(db, `products/${id}`);
      const product = await getDoc(productRef);

      dispatch({
        type: PRODUCT_DETAILS_RESPONSE,
        payload: { id: product.id, ...product.data() },
      });
    } catch (e) {
      dispatch({ type: PRODUCT_DETAILS_FAIL, payload: "Error" });
    }
  };
};
