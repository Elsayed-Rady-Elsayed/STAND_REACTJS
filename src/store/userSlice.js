import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const fetchUserInfo = createAsyncThunk(
  "userSlice/fetchUserInfo",
  async (uid) => {
    try {
      const docRef = doc(db, "users", uid);
      const response = await getDoc(docRef);
      if (response.exists()) {
        return response.data();
      } else {
        throw new Error("User not found");
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }
);

export const updateUserInfoCartAndList = createAsyncThunk(
  "userSlice/updateUserInfo",
  async ({ uid, newData }, { rejectWithValue }) => {
    try {
      const userDocRef = doc(db, "users", uid);
      await updateDoc(userDocRef, newData);
    } catch (e) {
      console.error("Error updating data in Firebase:", e.message);
      return rejectWithValue(e.message);
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
      const index = state.cart.findIndex(
        (product) => product.id === action.payload.item.id
      );
      if (index !== -1) state.cart.splice(index, 1);
    },
    addToWishList: (state, action) => {
      state.wishList.push(action.payload.item);
    },
    removeFromWishList: (state, action) => {
      const index = state.wishList.findIndex(
        (product) => product.id === action.payload.item.id
      );
      if (index !== -1) state.wishList.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.cart = action.payload?.cart || [];
        state.wishList = action.payload?.wishList || [];
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(updateUserInfoCartAndList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserInfoCartAndList.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload?.cart || state.cart;
        state.wishList = action.payload?.wishList || state.wishList;
      })
      .addCase(updateUserInfoCartAndList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addToCart, removeFromCart, addToWishList, removeFromWishList } =
  userSlice.actions;

export default userSlice.reducer;
