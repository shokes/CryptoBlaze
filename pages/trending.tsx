import React from 'react';
import Layout from '../components/Layout';
import { getTrending } from '../redux/features/trendingSlice';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrendingCoins from '../components/TrendingCoins';

const Trending = () => {
  const dispatch = useDispatch();
  const { trending, loading } = useSelector(
    (store: RootState) => store.trending
  );

  useEffect(() => {
    dispatch(getTrending());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activePage = 'trending';
  return (
    <Layout activePage={activePage}>
      <TrendingCoins cryptos={trending} loading={loading} />
    </Layout>
  );
};

export default Trending;
