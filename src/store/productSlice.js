import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsAsyncThunk/fetchProducts",
  async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("error ocured while fetching data");
      }
      const products = res.json();
      // dsfa
      return products;
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "productsAsyncThunkById/fetchProductsById",
  async (id) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) {
        throw new Error("this prodeuct doesnot exist");
      }
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }
);

export const ProductSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    singleProducts: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = [];
        state.products = [...state.products, ...action.payload];
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.products = [];
        state.singleProducts = { ...action.payload };
        state.loading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ProductSlice.reducer;
