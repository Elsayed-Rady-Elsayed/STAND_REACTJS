import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const fetchUserInfo = createAsyncThunk(
  "UserInfoAsyncThunk/fetchUserInformation",
  async (uid) => {
    try {
      const docRef = doc(db, "users", uid);
      const response = await getDoc(docRef);
      if (response.exists()) {
        return response.data();
      }
    } catch (e) {
      return e.message;
    }
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: {},
    cart: [],
    wishList: [],
    loading: false,
    error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
        state.cart = action.payload.cart;
        state.wishList = action.payload.wishList;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});
export const {
  removeFromWishList,
  addToCart,
  addToWishList,
  changeQuantityCart,
  changeWishList,
  removeFromCart,
} = userSlice.actions;
export default userSlice.reducer;
