import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';

export const getProductCounts = createAsyncThunk(
  'product/getAPIproduct',
  async (thunkAPI) => {
    const result = await axios.get('/api/getProductCount');
    return result.data;
  }
);

const initialState = {
  entities: {},
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initProducts(state, action) {},
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.products,
      };
    },
    [getProductCounts.fulfilled]: (state, action) => {
      state.entities = action.payload;
    },
  },
});

const { actions, reducer } = productSlice;
export const { initProducts } = actions;
export default reducer;
