// store.js
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../auth/LoginSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer.reducer

  },
});

export default store;
