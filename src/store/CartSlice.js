import { createSlice } from "@reduxjs/toolkit";

export const CartStore = createSlice({
  name: "cartOp",
  initialState: {
    cart: [],
    wishList: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload.item);
    },
    removeFromCart: (state, action) => {
      let indexOfProduct = state.cart.findIndex(
        (product) => product.id === action.payload.item.id
      );
      if (indexOfProduct !== -1) {
        state.cart.splice(indexOfProduct, 1);
      }
    },
    changeQuantityCart: (state, action) => {
      let indexOfProduct = state.cart.findIndex(
        (p) => p.id === action.payload.item.id
      );
      state.cart[indexOfProduct].quantity = action.payload.quantity;
    },
    addToWishList: (state, action) => {
      state.wishList.push(action.payload.item);
    },
    removeFromWishList: (state, action) => {
      let indexOfProduct = state.wishList.findIndex(
        (product) => product.id === action.payload.item.id
      );
      if (indexOfProduct !== -1) {
        state.wishList.splice(indexOfProduct, 1);
      }
    },
    changeWishList: (state, action) => {
      let indexOfProduct = state.wishList.findIndex(
        (p) => p.id === action.payload.item.id
      );
      state.wishList[indexOfProduct].quantity = action.payload.quantity;
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  changeQuantityCart,
  addToWishList,
  removeFromWishList,
  changeWishList,
} = CartStore.actions;
export default CartStore.reducer;
