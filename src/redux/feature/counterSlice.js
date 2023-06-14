import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incrementByAmount: (state, action) => state + action.payload,
    decrementByAmount: (state, action) => state - action.payload,
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
