import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  entities: {},
  activeCategory: {},
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    initCategories(state, action) {
      state.activeCategory = action.payload[0];
      state.entities = action.payload.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
    },
    changeCategories(state, action) {
      state.activeCategory = state.entities[action.payload];
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.categories,
      };
    },
  },
});

const { actions, reducer } = categoriesSlice;
export const { initCategories, changeCategories } = actions;
export default reducer;
