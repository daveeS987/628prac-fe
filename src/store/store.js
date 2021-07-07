import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counter from './counterSlice.js';
import categories from './categorySlice.js';

// export const store = configureStore({
//   reducer: {
//     counter,
//     categories,
//   },
// });

const makeStore = () => {
  configureStore({
    reducer: counter,
    categories,
  });
};

export const wrapper = createWrapper(makeStore);
