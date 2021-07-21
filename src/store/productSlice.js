import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';

export const getProductCounts = createAsyncThunk(
  'products/getAPIproduct',
  async (thunkAPI) => {
    const result = await axios.get('/api/getProductCount');
    return result.data;
  }
);

export const decrementStock = createAsyncThunk(
  'products/decrementStock',
  async (productID, thunkAPI) => {
    await axios.patch('/api/decrementCount', {
      productID,
    });
    thunkAPI.dispatch(getProductCounts());
  }
);

export const putStockBack = createAsyncThunk(
  'products/putStockBack',
  async (product, thunkAPI) => {
    await axios.patch('/api/putStockBack', product);
    thunkAPI.dispatch(getProductCounts());
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
    [decrementStock.fulfilled]: (state, action) => {
      console.log('decrementStock.fulfilled line 59');
    },
    [putStockBack.fulfilled]: (state, action) => {
      console.log('putStockBack got triggered line 62');
    },
  },
});

const { actions, reducer } = productSlice;
export const { initProducts } = actions;
export default reducer;
