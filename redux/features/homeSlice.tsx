import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import requests from '../../requests/requests';
import StateTypes from '../../interfaces/stateTypes';

const initialState: StateTypes = {
  cryptos: [],
  isLoading: false,
  loginModal: false,
  signUpModal: false,
  portfolio: [],
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

    addToPortfolio: (state, action) => {
  
      let data = action.payload;

      if (state.portfolio.some((item: any) => item.name === data.name)) return;
      state.portfolio.push(data);
    },

    removeFromPortfolio: (state, action) => {
      state.portfolio = state.portfolio.filter(
        (crypto) => crypto.name !== action.payload.name
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCryptos.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getCryptos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cryptos = action.payload;
      }),
      builder.addCase(getCryptos.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  openSignUpModal,
  closeSignUpModal,
  addToPortfolio,
  removeFromPortfolio,
} = homeSlice.actions;

export default homeSlice.reducer;
