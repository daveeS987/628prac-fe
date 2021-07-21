import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const getProductCounts = createAsyncThunk(
  'products/getAPIproduct',
  async (thunkAPI) => {
    console.log('getProducts was triggered');
    const result = await axios.get('/api/getProductCount');
    return result.data;
  }
);

export const decrementStock = createAsyncThunk(
  'products/decrementStock',
  async (productID, thunkAPI) => {
    console.log('decrement stock got triggered');

    const update = await axios.patch('/api/decrementCount', {
      productID,
    });
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
      console.log('decrementStock.fulfilled line 45');
      // return state;
    },
  },
});

const { actions, reducer } = productSlice;
export const { initProducts } = actions;
export default reducer;
