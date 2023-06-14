import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './feature/counterSlice';

const store = configureStore({
  reducer: {
    count: counterSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',

});

export default store;
