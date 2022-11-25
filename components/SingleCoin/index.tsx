import React from 'react';
import Image from 'next/image';
import SingleCoinTypes from '../../interfaces/singleCoinTypes';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { BiLeftArrow } from 'react-icons/bi';
import { BsGlobe, BsReddit, BsCurrencyDollar } from 'react-icons/bs';
import DOMPurify from 'dompurify';
import { useRouter } from 'next/router';
import { RiStarSLine, RiStarSFill } from 'react-icons/ri';
import {
  openLoginModal,
  addToPortfolio,
  removeFromPortfolio,
} from '../../redux/features/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useAuth } from '../../context/AuthContext';
import Loading from '../Loading';
import { addedAlert, removedAlert } from '../Toasts';

const SingleCoin = ({ coin, loading }: SingleCoinTypes) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useAuth();

  const { portfolio } = useSelector((store: RootState) => store.home);

  if (loading) {
    return <Loading />;
  }

  if (Object.entries(coin).length > 0) {
    const {
      id,
      name,
      symbol,
      image: { large: image },
      market_data: {
        sparkline_7d: { price: sparkline_in_7d },
        market_cap: { usd: market_cap },
        total_volume: { usd: total_volume },
        high_24h: { usd: high24 },
        low_24h: { usd: low24 },
        market_cap_rank,
        price_change_percentage_24h,
        price_change_percentage_7d,
        price_change_percentage_14d,
        price_change_percentage_30d,
        price_change_percentage_60d,
        price_change_percentage_1y,
      },
      hashing_algorithm,
      liquidity_score,

      links: { subreddit_url, homepage },
      description: { en: desc_eng },
    } = coin;

    const crypto = {
      id,
      name,
      image,
      symbol,
      price_change_percentage_24h,
      total_volume,
      market_cap,
      sparkline_in_7d,
      market_cap_rank,
    };

    return (
      <section>
        <div className='mb-[48px]'>
          <div className='mb-[80px]'>
            <button
              onClick={() => router.back()}
              className='flex items-center gap-1 text-blue cursor-pointer'
            >
              <BiLeftArrow /> Back
            </button>
          </div>
          <div className='flex gap-[160px] items-start mb-[112px]'>
            <div className='flex items-center gap-3'>
              <Image src={image} alt={name} width={70} height={70} />
              <div>
                <h4 className='font-bold text-xl'>{name}</h4>
                <span>{symbol.toUpperCase()}</span>
              </div>
            </div>

            <div>
              <h3 className='font-semibold text-lg'>Social Links</h3>
              <div className='flex flex-col text-gray-400  '>
                <span className='flex items-center gap-1'>
                  Website
                  <BsGlobe className='w-3 h-3' />:{' '}
                  <a
                    href={homepage}
                    target='_blank'
                    className='text-sm'
                    rel='noreferrer'
                  >
                    {homepage}
                  </a>{' '}
                </span>
                <span className='flex items-center gap-1'>
                  Reddit <BsReddit className='w-3 h-3' />:{' '}
                  <a
                    href={subreddit_url}
                    target='_blank'
                    className='text-sm'
                    rel='noreferrer'
                  >
                    {subreddit_url}
                  </a>
                </span>
              </div>
            </div>
            <div className='flex items-center gap-2 font-semibold text-lg'>
              {user ? (
                portfolio.find((item) => item.name === name) ? (
                  <RiStarSFill
                    className='w-[24px] h-[24px] cursor-pointer'
                    onClick={() => {
                      dispatch(removeFromPortfolio(crypto));
                      removedAlert(name);
                    }}
                  />
                ) : (
                  <RiStarSLine
                    className='w-[24px] h-[24px] cursor-pointer'
                    onClick={() => {
                      dispatch(addToPortfolio(crypto));
                      addedAlert(name);
                    }}
                  />
                )
              ) : (
                <RiStarSLine
                  className='w-[24px] h-[24px] cursor-pointer'
                  onClick={() => dispatch(openLoginModal())}
                />
              )}
              {user && portfolio.find((item) => item.name === name)
                ? 'Remove from watch list'
                : 'Add to watch list'}
            </div>
          </div>
          <div>
            <div className='flex items-center justify-between '>
              <span>
                <BsCurrencyDollar className='w-[32px] h-[32px] font-bold' />
              </span>
              <span className='font-bold text-xl'>7 Days</span>
            </div>
            <Sparklines data={sparkline_in_7d}>
              <SparklinesLine color='#1864ab' />
            </Sparklines>
            {/* // market cap */}
            <div className='grid grid-cols-2 gap-4  mb-[64px] mt-[32px]'>
              <div>
                <h2>Market Cap</h2>
                <span className='font-semibold'>
                  ${market_cap.toLocaleString()}
                </span>
              </div>
              <div className='place-self-star'>
                <h2>Volume 24h</h2>
                <span className='font-semibold'>
                  ${total_volume.toLocaleString()}
                </span>
              </div>
              <div>
                <h2>24h High</h2>
                <span className='font-semibold'>
                  ${high24.toLocaleString()}
                </span>
              </div>
              <div>
                <h2>24h Low</h2>
                <span className='font-semibold'>${low24.toLocaleString()}</span>
              </div>
            </div>

            {/* market stats */}
            <div>
              <h2 className='font-bold text-xl mb-[24px]'>Market Stats</h2>
              <div className='grid grid-cols-3 gap-[64px] '>
                <div>
                  <h2>Market Rank</h2>
                  <span className='font-semibold'>{market_cap_rank}</span>
                </div>
                <div>
                  <h2>Hashing Algorithm</h2>
                  <span className='font-semibold'>{hashing_algorithm}</span>
                </div>

                <div>
                  <h2>Liquidity Score</h2>
                  <span className='font-semibold'>
                    {liquidity_score.toFixed(2)}
                  </span>
                </div>
                <div>
                  <h2>Price Change (24h)</h2>
                  <span className='font-semibold'>
                    {price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
                <div>
                  <h2>Price Change (7d)</h2>
                  <span className='font-semibold'>
                    {' '}
                    {price_change_percentage_7d.toFixed(2)}%
                  </span>
                </div>
                <div>
                  <h2>Price Change (14d)</h2>
                  <span className='font-semibold'>
                    {price_change_percentage_14d.toFixed(2)}%
                  </span>
                </div>
                <div>
                  <h2>Price Change (30d)</h2>
                  <span className='font-semibold'>
                    {price_change_percentage_30d.toFixed(2)}%
                  </span>
                </div>
                <div>
                  <h2>Price Change (60d)</h2>
                  <span className='font-semibold'>
                    {price_change_percentage_60d.toFixed(2)}%
                  </span>
                </div>
                <div>
                  <h2>Price Change (1y)</h2>
                  <span className='font-semibold'>
                    {price_change_percentage_1y.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
            <div className='mt-14'>
              <h2 className='font-bold mb-2'>About {name}</h2>
              {desc_eng ? (
                <p
                  className=''
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(desc_eng),
                  }}
                ></p>
              ) : (
                'Not available at this moment...'
              )}
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default SingleCoin;
