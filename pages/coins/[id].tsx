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
          `${process.env.BASE_URL}coins/${id}?${process.env.LAST_URL}`
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
