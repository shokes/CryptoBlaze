import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requests from '../../requests/requests';

const initialState = {
  nfts: [],
  isLoading: false,
};

// fetching cryptos to be displayed home

export const getNfts: any = createAsyncThunk('cryptos/getNfts', async () => {
  return fetch(requests.nftList)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const NftsSlice = createSlice({
  name: 'NFTs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNfts.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getNfts.fulfilled, (state, action) => {
        state.isLoading = false;

        state.nfts = action.payload;
      }),
      builder.addCase(getNfts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default NftsSlice.reducer;
