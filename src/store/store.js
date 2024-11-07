import { configureStore } from "@reduxjs/toolkit";
import CartStore from "./CartSlice";
import productSlice from "./productSlice";
export default configureStore({
  reducer: {
    cart: CartStore,
    product: productSlice,
  },
});
