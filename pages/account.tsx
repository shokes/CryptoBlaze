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

import firebase from './../config/firebase';
import Portfolio from '../components/Portfolio';

const Account = () => {
  const { user } = useAuth();

  // ref = firebase.firestore().coll;

  const activePage = 'Account';
  const dispatch = useDispatch();
  const router = useRouter();
  const { portfolio } = useSelector((store: RootState) => store.home);

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
          <Portfolio portfolio={portfolio} />
        </div>
      </div>
    </Layout>
  );
};

export default Account;
