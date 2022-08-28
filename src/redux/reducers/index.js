import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});
export default reducers;