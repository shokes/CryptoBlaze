import React from 'react';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import SingleCoin from '../../components/SingleCoin';

const SingleCoinPage = () => {
  // to fix the typings later
  const [crypto, setCrypto] = useState<any>({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    const getSingleCoin = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        const data = await response.json();

        setCrypto(data);
      } catch (error) {
        console.log('an error occured');
      }
    };
    getSingleCoin();
  }, [id]);

  return (
    <Layout activePage='single'>
      <SingleCoin coin={crypto} />
    </Layout>
  );
};

export default SingleCoinPage;
