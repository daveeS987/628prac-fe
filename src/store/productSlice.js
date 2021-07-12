import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';

export const getAPIproduct = createAsyncThunk(
  'product/getAPIproduct',
  async (thunkAPI) => {
    const result = await axios.get('/api/getProduct');
    return result.data;
  }
);

const initialState = {
  ids: [],
  entities: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initProducts(state, action) {
      // console.log('init product action.payload: ', action.payload);
      state.entities = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      // console.log('product HYRDRATE state: ', state);
      // console.log(
      //   'product HYDRATE action.payload.product: ',
      //   action.payload.products
      // );
      return {
        ...state,
        ...action.payload.products,
      };
    },
    [getAPIproduct.fulfilled]: (state, action) => {
      // console.log('🚀 ~ file: product.js ~ line 44 ~ action', action);
      state.entities = action.payload;
    },
  },
});

const { actions, reducer } = productSlice;
export const { initProducts } = actions;
export default reducer;
