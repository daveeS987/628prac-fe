import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { HYDRATE } from 'next-redux-wrapper';

// export const getAPICategories = createAsyncThunk(
//   'categories/getAPICategories',
//   async()
// );

const initialState = {
  ids: [],
  entities: {},
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
  },
  // extraReducers: {
  // [HYDRATE]: (state, action) => {
  //   console.log('HYRDRATE', state, action.payload);
  //   return {
  //     ...state,
  //     ...action.payload,
  //   };
  // },
  // },
});

const { actions, reducer } = categoriesSlice;
export const { incrementCount, decrementcount, incrementBy } = actions;
export default reducer;
