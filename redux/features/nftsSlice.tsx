import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requests from '../../requests/requests';

const initialState = {
  nfts: [],
  loading: false,
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
      state.loading = true;
    }),
      builder.addCase(getNfts.fulfilled, (state, action) => {
        state.loading = false;

        state.nfts = action.payload;
      }),
      builder.addCase(getNfts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default NftsSlice.reducer;
