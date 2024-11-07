import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "categoryAsyncThunk/fetchCategories",
  async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      if (!res.ok) {
        throw new Error("error ocured while fetching data");
      }
      const products = res.json();
      return products;
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const CategoriesSlice = createSlice({
  name: "productSlice",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = [];
        state.products = [];
        state.loading = false;
        state.categories = [...state.categories, ...action.payload];
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default CategoriesSlice.reducer;
