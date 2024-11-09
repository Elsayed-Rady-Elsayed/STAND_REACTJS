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
    loading: false,
    error: null,
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
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
