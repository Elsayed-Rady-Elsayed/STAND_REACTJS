// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase";
// export const GetUserDataIfExist = createAsyncThunk(
//   "GetAsyncDataFromFirebase/fetchAllProductsCartAndWishList",
//   async (uid) => {
//     try {
//       const docRef = doc(db, "users", uid);
//       const response = await getDoc(docRef);
//       if (!response.exists()) {
//         throw new Error("error occured");
//       }
//       return response.data();
//     } catch (e) {
//       return e.message;
//     }
//   }
// );
// export const CartStore = createSlice({
//   name: "cartOp",
//   initialState: {

//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(GetUserDataIfExist.pending, (state) => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(GetUserDataIfExist.fulfilled, (state, action) => {
//         state.cart = [];
//         state.wishList = [];
//         state.loading = false;
//         state.error = null;
//         state.cart = action.payload.cart;
//         state.wishList = action.payload.wishList;
//       })
//       .addCase(GetUserDataIfExist.rejected, (state, action) => {
//         state.error = action.payload;
//         state.loading = false;
//       });
//   },
// });
// export const {
//   addToCart,
//   removeFromCart,
//   changeQuantityCart,
//   addToWishList,
//   removeFromWishList,
//   changeWishList,
// } = CartStore.actions;
// export default CartStore.reducer;
