import { configureStore } from '@reduxjs/toolkit';
import counter from './counterSlice.js';
import categories from './categorySlice.js';

export const store = configureStore({
  reducer: {
    counter,
    categories,
  },
});
