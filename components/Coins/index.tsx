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

const Coins = ({ cryptos, searchValue, inputHandler }: CoinsTypes) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { portfolio } = useSelector((store: RootState) => store.home);

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
            placeholder='Search...'
            className=' border border-blue rounded w-[320px] h-[42px] p-2'
            onChange={inputHandler}
          />
        </div>

        <table className=''>
          <thead className='sticky top-0 bg-extraLightBlue'>
            <tr>
              <th></th>
              <th>Rank</th>
              <th>Coin</th>
              <th></th>
              <th>Price</th>
              <th>24h</th>
              <th>24h Volume</th>
              <th>Market</th>
              <th>Last 7 Days</th>
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
                    {user ? (
                      portfolio.find((item) => item.name === name) ? (
                        <RiStarSFill
                          className='w-[24px] h-[24px] cursor-pointer'
                          onClick={() => dispatch(removeFromPortfolio(crypto))}
                        />
                      ) : (
                        <RiStarSLine
                          className='w-[24px] h-[24px] cursor-pointer'
                          onClick={() => dispatch(addToPortfolio(crypto))}
                        />
                      )
                    ) : (
                      <RiStarSLine
                        className='w-[24px] h-[24px] cursor-pointer'
                        onClick={() => dispatch(openLoginModal())}
                      />
                    )}
                  </td>
                  <td>{market_cap_rank}</td>
                  <td className='flex gap-3 items-center'>
                    <Image
                      src={image}
                      alt={name}
                      width={30}
                      height={30}
                      className='w-auto h-auto'
                    />
                    <Link
                      href={`coins/${id}`}
                      className='hover:underline underline-offset-2'
                    >
                      {name}
                    </Link>
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
                  <td>
                    <Sparklines data={sparkline_in_7d.price}>
                      <SparklinesLine color='#1864ab' />
                    </Sparklines>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Coins;
