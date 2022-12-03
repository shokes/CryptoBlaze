import React from 'react';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { openLoginModal } from '../redux/features/homeSlice';
import { auth } from '../config/firebase';
import Portfolio from '../components/Portfolio';
import { FadeInText } from '../components/Animations/fadeInText';
import { useAuth } from '../context/AuthContext';

const Account = () => {
  const { user, savedCoin, removeFromPortfolio } = useAuth();

  const activePage = 'Account';
  const dispatch = useDispatch();
  const router = useRouter();

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
            <FadeInText text='My Portfolio' />
          </h2>
          <Portfolio
            savedCoin={savedCoin}
            removeFromPortfolio={removeFromPortfolio}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Account;
