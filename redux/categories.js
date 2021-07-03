import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    ids: [],
    entities: {},
  },
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYRDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export default categoriesSlice.reducer;
