import { RiStarSLine } from 'react-icons/ri';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useState, useRef, useEffect } from 'react';

const Coins = () => {
  const { cryptos } = useSelector((store: RootState) => store.home);

  const searchValue = useRef<HTMLInputElement>(null);

  const [searchCrypto, setSearchCrypto] = useState<string>('f');
  console.log(searchCrypto);

  useEffect(() => {
    searchValue.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputHandler = () => {
    if (searchValue.current) {
      // console.log(searchValue.current.value);
      setSearchCrypto(searchValue.current.value);
    }
  };

  if (cryptos.length !== 0) {
    return (
      <section>
        <div>
          <div className='flex justify-between items-center mb-[40px]'>
            <h2 className='font-bold text-xl'>
              Cryptocurrency Prices by Market Cap
            </h2>
            <input
              ref={searchValue}
              type='text'
              placeholder='Search crypto'
              className=' border border-blue rounded w-[320px] h-[42px] p-2'
              onChange={inputHandler}
            />
          </div>

          <table>
            <thead>
              <tr>
                <th></th>
                <th>#</th>
                <th>Coin</th>
                <th></th>
                <th>Price</th>
                <th>24h</th>
                <th>24h Volume</th>
                <th>Market</th>
                <th>Last 7 Days</th>
              </tr>
            </thead>

            <tbody className=' font-thin'>
              {cryptos.map((item: any, index: number) => {
                const {
                  name,
                  image,
                  symbol,
                  current_price: price,
                  price_change_percentage_24h,
                  total_volume,
                  market_cap,
                } = item;

                return (
                  <tr key={index + 1}>
                    <td>
                      <RiStarSLine className='w-[1.5rem] h-[1.5rem]' />
                    </td>
                    <td>{index + 1}</td>
                    <td className='flex gap-3 items-center'>
                      <Image
                        src={image}
                        alt={name}
                        width={30}
                        height={30}
                        className='w-auto h-auto'
                      />
                      {name}
                    </td>
                    <td className='uppercase text-sm'>{symbol}</td>
                    <td>${price.toLocaleString()}</td>
                    <td
                      className={`${
                        price_change_percentage_24h > 0
                          ? 'text-green'
                          : 'text-red'
                      }`}
                    >
                      {price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td>${total_volume.toLocaleString()}</td>
                    <td>${market_cap.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Coins;
