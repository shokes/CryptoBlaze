import React from 'react';
import TrendingCoinsTypes from '../../interfaces/trendingCoinsTypes';
import Image from 'next/image';
import btc from '../../public/Logo/BTCLogo.png';
import Link from 'next/link';
import Loading from '../Loading';
import { FadeInText } from '../Animations/fadeInText';

const TrendingCoins = ({ cryptos, loading }: TrendingCoinsTypes) => {
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <section>
      <div>
        <div className=' mb-[40px]'>
          <h2 className='font-bold text-xl'>
            <FadeInText text=' Trending Coins' />{' '}
          </h2>
        </div>

        <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-[64px] '>
          {cryptos?.map((crypto) => {
            const { large, symbol, name, price_btc, slug, id } = crypto.item;

            return (
              <Link
                href={`coins/${id}`}
                key={slug}
                className='flex justify-between items-center trending  hover:text-blue duration-150 ease-in-out'
              >
                <div className='flex items-center gap-3 text-sm '>
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
