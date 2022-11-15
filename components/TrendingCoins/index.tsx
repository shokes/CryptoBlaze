import React from 'react';
import TrendingCoinsTypes from '../../interfaces/trendingCoinsTypes';
import Image from 'next/image';
import btc from '../../public/Logo/BTCLogo.png';
import Link from 'next/link';

const TrendingCoins = ({ cryptos }: TrendingCoinsTypes) => {
  return (
    <section>
      <div>
        <div className=' mb-[40px]'>
          <h2 className='font-bold text-xl'>Trending Coins</h2>
        </div>

        <div className='grid grid-cols-3  gap-y-[54px] gap-x-[64px] '>
          {cryptos?.map((crypto) => {
            const { large, symbol, name, price_btc, slug, id } = crypto.item;

            return (
              <Link
                href={`coins/${id}`}
                key={slug}
                className='flex justify-between items-center'
              >
                <div className='flex items-center gap-3 text-sm'>
                  <Image alt={name} src={large} width={50} height={50} />
                  <div className='flex flex-col'>
                    <h4 className='font-bold'>{name}</h4>
                    <span>{symbol}</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <Image src={btc} alt='btc logo' width={20} height={20} />
                  <span>{price_btc.toFixed(7)}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrendingCoins;
