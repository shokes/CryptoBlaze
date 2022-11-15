import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requests from '../../requests/requests';

const initialState = {
  trending: [],
  isLoading: false,
};

// fetching cryptos to be displayed in trending page

export const getTrending: any = createAsyncThunk(
  'cryptos/getTrending',
  async () => {
    return fetch(requests.trending)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
);

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrending.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getTrending.fulfilled, (state, action) => {
        state.isLoading = false;

        state.trending = action.payload.coins;
      }),
      builder.addCase(getTrending.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default trendingSlice.reducer;
