import { createSlice } from '@reduxjs/toolkit';

export interface ICommonState {
  isLoading: Boolean;
}

const initialState: ICommonState = {
  isLoading: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      console.log(payload, 'payload isLoading');

      state.isLoading = payload;
    },
  },
});

export default commonSlice.reducer;

export const { setIsLoading } = commonSlice.actions;
