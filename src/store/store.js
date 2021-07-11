import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counter from './counterSlice.js';
import categories from './categorySlice.js';

const makeStore = () =>
  configureStore({
    reducer: {
      counter,
      categories,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
