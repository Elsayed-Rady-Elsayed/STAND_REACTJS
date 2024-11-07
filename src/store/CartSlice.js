import { createSlice } from "@reduxjs/toolkit";

export const CartStore = createSlice({
  name: "cartOp",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.paylod.item);
    },
    removeFromCart: (state, action) => {
      let indexOfProduct = state.cart.indexOf(action.payload.item);
      state.cart.pop(indexOfProduct);
    },
  },
});
export const { addToCart, removeFromCart } = CartStore.actions;
export default CartStore.reducer;
