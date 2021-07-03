import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import categories from './categories.js';
import products from './products.js';

const makeStore = () => {
  configureStore({
    reducer: { categories, products },
    devTools: true,
  });
};

export const wrapper = createWrapper(makeStore);
