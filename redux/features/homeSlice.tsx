import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import requests from '../../requests/requests';
import StateTypes from '../../interfaces/stateTypes';

const initialState: StateTypes = {
  cryptos: [],
  loading: true,
  loginModal: false,
  signUpModal: false,
};

// fetching cryptos to be displayed on home

export const getCryptos: any = createAsyncThunk(
  'cryptos/getCryptos',
  async () => {
    return fetch(requests.cryptoList)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.signUpModal = false;
      state.loginModal = true;
    },

    closeLoginModal: (state) => {
      state.loginModal = false;
    },

    openSignUpModal: (state) => {
      state.signUpModal = true;
      state.loginModal = false;
    },

    closeSignUpModal: (state) => {
      state.signUpModal = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCryptos.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getCryptos.fulfilled, (state, action) => {
        state.loading = false;
        state.cryptos = action.payload;
      }),
      builder.addCase(getCryptos.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  openSignUpModal,
  closeSignUpModal,
} = homeSlice.actions;

export default homeSlice.reducer;
