import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    ids: [],
    entities: {},
  },
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export default productSlice.reducer;
