import { RiStarSLine, RiStarSFill } from 'react-icons/ri';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Image from 'next/image';
import CoinsTypes from '../../interfaces/coinsTypes';
import Link from 'next/link';
import {
  addToPortfolio,
  openLoginModal,
  removeFromPortfolio,
} from '../../redux/features/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../context/AuthContext';
import { RootState } from '../../redux/store';
import { db } from '../../config/firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { motion, Variants } from 'framer-motion';
import Loading from '../Loading';
import { FadeInText } from '../Animations/fadeInText';
import { addedAlert, removedAlert } from '../Toasts';
import { FadeIn } from '../Animations/fadeIn';

const Coins = ({ cryptos, searchValue, inputHandler }: CoinsTypes) => {
  const { user, theme } = useAuth();
  const dispatch = useDispatch();
  const { portfolio, loading } = useSelector((store: RootState) => store.home);

  // const coinPath = doc(db, 'users', `${user?.email}`);

  // const saveCoin = async () => {
  //   if (user?.email) {
  //     //   setSavedCoin(true);
  //     await updateDoc(coinPath, {
  //       portfolio: arrayUnion({
  //         id: cryptos.id,
  //         name: cryptos.name,
  //         image: cryptos.image,
  //         rank: cryptos.market_cap_rank,
  //         symbol: cryptos.symbol,
  //       }),
  //     });
  //   } else {
  //     // setSignInModalOpen(true);
  //   }
  // };

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <div className='relative'>
        <div className='flex flex-col lg:flex-row mb-[22.4px] gap-3 lg:gap-0  lg:items-center lg:justify-between  lg:mb-[40px]'>
          <h2 className='font-bold text:lg lg:text-xl'>
            <FadeInText text='Cryptocurrency Prices by Market Cap' />
          </h2>
          <input
            ref={searchValue}
            type='text'
            placeholder='Search...'
            className=' border border-blue rounded w-full bg-[#fff] lg:w-[320px] h-[42px] p-2 text-[#343a40]'
            onChange={inputHandler}
          />
        </div>
        <div className='overflow-auto'>
          <table>
            <thead className='lg:sticky lg:top-0 bg-extraLightBlue animation'>
              <tr>
                <th></th>
                <th className='nowrap '>Rank</th>
                <th className='nowrap '>Coin</th>

                <th className='nowrap '>Price</th>
                <th className='nowrap '>24h</th>
                <th className='nowrap '>24h Volume</th>
                <th className='nowrap '>Market</th>
                <th className='nowrap '>Last 7 Days</th>
              </tr>
            </thead>

            <tbody>
              {cryptos?.map((crypto) => {
                const {
                  id,
                  name,
                  image,
                  symbol,
                  current_price: price,
                  price_change_percentage_24h,
                  total_volume,
                  market_cap,
                  sparkline_in_7d,
                  market_cap_rank,
                } = crypto;

                return (
                  <tr key={market_cap_rank}>
                    <td>
                      <FadeIn>
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
                      </FadeIn>
                    </td>
                    <td>
                      {' '}
                      <FadeIn>{market_cap_rank}</FadeIn>
                    </td>
                    <td className='flex gap-3 items-center mr-[32px] lg:mr-[0px]'>
                      <FadeIn>
                        <Image
                          src={image}
                          alt={name}
                          width={30}
                          height={30}
                          className='w-auto h-auto'
                        />
                      </FadeIn>
                      <FadeIn>
                        <div className='flex flex-col lg:flex-row lg:gap-3 lg:items-baseline'>
                          <Link
                            href={`coins/${id}`}
                            className='hover:underline underline-offset-2 hover:text-blue duration-150 ease-in-out '
                          >
                            {name}
                          </Link>
                          <span className='text-xs uppercase'> {symbol} </span>
                        </div>{' '}
                      </FadeIn>
                    </td>

                    <td>
                      <FadeIn>${price.toLocaleString()}</FadeIn>
                    </td>
                    <td
                      className={`${
                        price_change_percentage_24h > 0
                          ? 'text-green'
                          : 'text-red'
                      }`}
                    >
                      <FadeIn>
                        {' '}
                        {price_change_percentage_24h.toFixed(2)}%
                      </FadeIn>
                    </td>
                    <td>
                      <FadeIn>${total_volume.toLocaleString()} </FadeIn>{' '}
                    </td>
                    <td>
                      <FadeIn>${market_cap.toLocaleString()}</FadeIn>{' '}
                    </td>
                    <td>
                      <FadeIn>
                        {' '}
                        <Sparklines data={sparkline_in_7d.price}>
                          <SparklinesLine color='#1864ab' />
                        </Sparklines>
                      </FadeIn>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <motion.div
          variants={infiniteRotate}
          animate='rotate'
          className='absolute -top-[64px] right-[416px] rotate-180 hidden lg:block '
        >
          <div className='scale-75 lg:scale-100'>
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              width='100px'
              height='100px'
              viewBox='0 0 300 300'
              xmlSpace='preserve'
            >
              <defs>
                <path
                  id='circlePath'
                  d=' M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0'
                />
              </defs>

              <g>
                <use xlinkHref='#circlePath' fill='none' />

                <text fill={theme === 'light-theme' ? '#343a40' : '#f8f9fa'}>
                  <textPath xlinkHref='#circlePath' fontSize='2.15rem'>
                    SCROLL TO EXPLORE - SCROLL TO EXPLORE -
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coins;

const infiniteRotate: Variants = {
  rotate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 8,
      ease: 'linear',
    },
  },
};
