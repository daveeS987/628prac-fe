import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { HYDRATE } from 'next-redux-wrapper';
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
  count: 0,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    incrementCount(state, action) {
      state.count += 1;
    },
    decrementcount(state, action) {
      state.count -= 1;
    },
    incrementBy(state, action) {
      state.count += action.payload;
    },
    initCategories(state, action) {
      state.entities.concat(action.payload);
    },
  },
  extraReducers: {
    // [HYDRATE]: (state, action) => {
    //   console.log('HYRDRATE', state, action.payload);
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    // },
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
