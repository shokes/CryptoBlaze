import type { NextPage } from 'next';
import Coins from '../components/Coins';
import Layout from '../components/Layout';
import { getCryptos } from '../redux/features/homeSlice';
import { useEffect, useState, useRef } from 'react';
import { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { cryptos } = useSelector((store: RootState) => store.home);
  const [searchCrypto, setSearchCrypto] = useState<string>('');
  const [coins, setCoins] = useState<
    {
      id: string;
      name: string;
      image: string;
      symbol: string;
      current_price: number;
      price_change_percentage_24h: number;
      total_volume: number;
      market_cap: number;
      sparkline_in_7d: {
        price: [];
      };
      market_cap_rank: number;
    }[]
  >([]);

  const searchValue = useRef<HTMLInputElement>(null);
  const activePage = 'home';

  useEffect(() => {
    dispatch(getCryptos());
    searchValue.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCoins(cryptos);
  }, [cryptos]);

  useEffect(() => {
    if (searchCrypto === '') {
      setCoins(cryptos);
    } else {
      let filteredResult = cryptos.filter((item: { name: string }) =>
        item.name.toLowerCase().includes(searchCrypto.toLowerCase())
      );

      setCoins(filteredResult);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCrypto]);

  const inputHandler = () => {
    if (searchValue.current) {
      setSearchCrypto(searchValue.current.value);
    }
  };

  return (
    <div>
      <Layout activePage={activePage}>
        <Coins
          cryptos={coins}
          inputHandler={inputHandler}
          searchValue={searchValue}
        />
      </Layout>
    </div>
  );
};

export default Home;
