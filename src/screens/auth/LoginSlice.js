import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth } from '../../services/firebase';

export const loginUser = createAsyncThunk('login/loginUser', async ({ email, password }) => {
  try {
    let signInMethods = await fetchSignInMethodsForEmail(auth, email);

    if (signInMethods.length > 0) {
      await signInWithEmailAndPassword(auth, email, password);
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth, email, password);
    }

    return { email };
  } catch (error) {
    throw error;
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.email;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectUser = (state) => state.login.user;
export const selectStatus = (state) => state.login.status;
export const selectError = (state) => state.login.error;

export default loginSlice.reducer;
