import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import SingleCoin from '../../components/SingleCoin';
import CryptoTypes from '../../interfaces/cryptoTypes';

const SingleCoinPage = () => {
  const [crypto, setCrypto] = useState<CryptoTypes>({} as CryptoTypes);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    const getSingleCoin = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`
        );
        const data = await response.json();
        setLoading(false);
        setCrypto(data);
      } catch (error) {
        console.log('an error occured');
      }
    };
    getSingleCoin();
  }, [id]);

  return (
    <Layout activePage={crypto.name === undefined ? '' : crypto.name}>
      <SingleCoin coin={crypto} loading={loading} />
    </Layout>
  );
};

export default SingleCoinPage;
