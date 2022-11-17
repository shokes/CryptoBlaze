import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import SingleCoin from '../../components/SingleCoin';

interface CryptoTypes {
  name: string;
  symbol: string;
  image: {
    large: string;
  };
  description: { en: string };

  market_data: {
    sparkline_7d: {
      price: [];
    };

    market_cap: {
      usd: number;
    };

    high_24h: { usd: number };
    low_24h: { usd: number };
    market_cap_rank: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_1y: number;
    price_change_percentage_14d: number;

    total_volume: {
      usd: number;
    };
  };

  links: {
    subreddit_url: string;
    chat_url: string;
    homepage: string;
  };
  hashing_algorithm: number;
  liquidity_score: number;
}

const SingleCoinPage = () => {
  const [crypto, setCrypto] = useState<CryptoTypes>({} as CryptoTypes);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    const getSingleCoin = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`
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
