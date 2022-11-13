import React from 'react';
import type { NextPage } from 'next';
import Coins from '../components/Coins';
import Layout from '../components/Layout';
import Head from 'next/head';
import { getCryptos } from '../redux/features/homeSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const activePage = 'Home';

  useEffect(() => {
    dispatch(getCryptos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Head>
        <title>CryptoBlaze</title>
      </Head>
      <Layout activePage={activePage}>
        <Coins />
      </Layout>
    </div>
  );
};

export default Home;
