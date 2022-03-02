import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import {
  productAddReducer,
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { userRegisterReducer, userLoginReducer } from "./reducers/userReducers";

const reducers = combineReducers({
  // Product
  productAdd: productAddReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  // Cart
  cart: cartReducer,
  // User
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
});

const initialState = {
  cart: {
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  },
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
