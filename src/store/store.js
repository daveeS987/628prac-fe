import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import categories from './categorySlice.js';
import products from './productSlice.js';
import cart from './cartSlice.js';

const makeStore = () =>
  configureStore({
    reducer: {
      categories,
      products,
      cart,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
