import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import { productListReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducers = combineReducers({
  // Product
  productList: productListReducer,
  // Cart
  cart: cartReducer,
});

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
