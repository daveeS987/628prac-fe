import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = { show: false };

const showCartSlice = createSlice({
  name: 'showCart',
  initialState,
  reducers: {
    toggle(state, action) {
      if (state.show === true) {
        state.show = false;
      } else {
        state.show = true;
      }
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.showCart,
      };
    },
  },
});

const { actions, reducer } = showCartSlice;
export const { toggle } = actions;
export default reducer;
