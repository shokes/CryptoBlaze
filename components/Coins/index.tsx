import { useState, useEffect } from 'react';
import { RiStarSLine } from 'react-icons/ri';
import Image from 'next/image';

const Coins = () => {
  const [cryptos, setCryptos] = useState([]);
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  const getCryptos = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setCryptos(data);
  };

  useEffect(() => {
    getCryptos();
  }, []);

  if (cryptos.length !== 0) {
    return (
      <section>
        <div>
          <div className='flex justify-between items-center mb-[40px]'>
            <h2 className='font-bold text-xl'>
              Cryptocurrency Prices by Market Cap
            </h2>
            <input
              type='text'
              placeholder='Search crypto'
              className=' border border-blue rounded w-[320px] h-[42px] p-2'
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
                console.log(item);
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
                      <Image src={image} alt={name} width={20} height={20} />
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
