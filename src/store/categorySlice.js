import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';

export const getAPICategories = createAsyncThunk(
  'categories/getAPICategories',
  async (thunkAPI) => {
    const result = await axios.get('/api/getCategories');
    return result.data;
  }
);

const initialState = {
  ids: [],
  entities: {},
  activeCategory: {},
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    initCategories(state, action) {
      // console.log('init categories action.payload: ', action.payload);
      state.activeCategory = action.payload[0];
      state.entities = action.payload.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
    },
    changeCategories(state, action) {
      // console.log(
      //   '🚀 ~ file: categorySlice.js ~ line 34 ~ changeCategories ~ action.payload',
      //   action.payload
      // );
      state.activeCategory = state.entities[action.payload];
      // console.log(
      //   '🚀 ~ file: categorySlice.js ~ line 37 ~ changeCategories ~ state.activeCategory ',
      //   state.activeCategory
      // );
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      // console.log('category HYRDRATE state: ', state);
      // console.log(
      //   'category HYDRATE action.payload.categories: ',
      //   action.payload.categories
      // );
      return {
        ...state,
        ...action.payload.categories,
      };
    },
    [getAPICategories.fulfilled]: (state, action) => {
      // console.log('🚀 ~ file: categories.js ~ line 44 ~ action', action);
      state.entities = action.payload;
    },
  },
});

const { actions, reducer } = categoriesSlice;
export const { initCategories, changeCategories } = actions;
export default reducer;
