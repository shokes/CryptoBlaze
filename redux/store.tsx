import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../redux/features/homeSlice';
import trendingReducer from '../redux/features/trendingSlice';
import NftsReducer from '../redux/features/nftsSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    trending: trendingReducer,
    nfts: NftsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { home: homeReducer,}
export type AppDispatch = typeof store.dispatch;
