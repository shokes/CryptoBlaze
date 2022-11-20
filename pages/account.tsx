import React from 'react';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {
  openLoginModal,
  removeFromPortfolio,
} from '../redux/features/homeSlice';
import { auth } from '../config/firebase';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useAuth } from '../context/AuthContext';
import { AiFillDelete } from 'react-icons/ai';
import Link from 'next/link';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Image from 'next/image';

const Account = () => {
  const { user } = useAuth();

  const activePage = 'Account';
  const dispatch = useDispatch();
  const router = useRouter();
  const { portfolio } = useSelector((store: RootState) => store.home);
  console.log(portfolio);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/');
        dispatch(openLoginModal());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout activePage={activePage}>
      <div>
        <div>
          <p className='font-bold'>
            Account: <span className='font-medium'>{user?.email}</span>{' '}
          </p>

          <h2 className='font-bold text-xl mt-[64px] mb-[32px]'>
            My Portfolio
          </h2>
          <div>
            <table className=''>
              <thead className='sticky top-0 bg-extraLightBlue'>
                <tr>
                  <th>Rank</th>
                  <th>Coin</th>
                  <th></th>
                  <th>Price</th>
                  <th>24h</th>
                  <th>24h Volume</th>
                  <th>Market</th>
                  <th>Last 7 Days</th>
                  <th>Remove Coin</th>
                </tr>
              </thead>

              <tbody>
                {portfolio?.map((item) => {
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
                  } = item;

                  return (
                    <tr key={market_cap_rank}>
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

                      {/* // to fix later */}
                      <div className='relative'>
                        <AiFillDelete
                          className='text-right w-[2rem] absolute -top-[32px] h-[32px] right-1/2 cursor-pointer'
                          onClick={() => dispatch(removeFromPortfolio(name))}
                        />
                      </div>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
