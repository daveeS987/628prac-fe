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
  entities: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    initCategories(state, action) {
      console.log('init categories action.payload: ', action.payload);
      state.entities = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('category HYRDRATE state: ', state);
      console.log(
        'category HYDRATE action.payload.categories: ',
        action.payload.categories
      );
      return {
        ...state,
        ...action.payload.categories,
      };
    },
    [getAPICategories.fulfilled]: (state, action) => {
      console.log('🚀 ~ file: categories.js ~ line 44 ~ action', action);
      state.entities.concat(action.payload);
    },
  },
});

const { actions, reducer } = categoriesSlice;
export const { incrementCount, decrementcount, incrementBy, initCategories } =
  actions;
export default reducer;
