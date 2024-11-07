import { configureStore } from "@reduxjs/toolkit";
import CartStore from "./CartSlice";

export default configureStore({
  reducer: {
    cart: CartStore,
  },
});
