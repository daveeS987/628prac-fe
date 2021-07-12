import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
// import counter from './counterSlice.js';
import categories from './categorySlice.js';
import products from './productSlice.js';

const makeStore = () =>
  configureStore({
    reducer: {
      // counter,
      categories,
      products,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
