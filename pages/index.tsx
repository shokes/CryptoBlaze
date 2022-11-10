import React from 'react';
import { Home } from '../components';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
        <title>CryptoBlaze</title>
      </Head>
      <Home />
    </div>
  );
};

export default index;
