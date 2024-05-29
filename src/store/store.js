// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from '../../src/features/counter/CounterSlice.ts';

const store = configureStore({
  reducer: {
    counter: CounterSlice
  }
});

export default store;
