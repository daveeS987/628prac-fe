import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';

const initialState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log('action from line 12:', action.payload);
      if (state[action.payload.productID]) {
        state[action.payload.productID].count += 1;
      } else {
        state[action.payload.productID] = {
          count: 1,
          name: action.payload.productName,
        };
      }
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.cart,
      };
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart } = actions;
export default reducer;
