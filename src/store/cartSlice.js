import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';

const initialState = { count: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log('action from line 12:', action);
      state.count += 1;
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
