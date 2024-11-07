import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import productSlice from "./productSlice";
import categoriesSlice from "./CategoriesSlice";
export default configureStore({
  reducer: {
    cart: CartSlice,
    product: productSlice,
    category: categoriesSlice,
  },
});