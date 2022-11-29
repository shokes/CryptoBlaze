import React from 'react';
import Head from 'next/head';
import Navigation from '../Navigation';
import Menu from '../Menu';
import Footer from '../Footer';
import LayoutTypes from '../../interfaces/layoutTypes';
import { CustomCursor } from '../CustomCursor';
import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CollapseNav from '../Navigation/CollapseNav';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';
import Progressbar from '../ProgressBar';

const Layout = ({ children, activePage }: LayoutTypes) => {
  const isTouchDevice = useIsTouchDevice();

  return (
    <div className='container'>
      {!isTouchDevice && <CustomCursor />}
      {!isTouchDevice && <Progressbar />}
      <Head>
        <title>
          CryptoBlaze -{' '}
          {activePage &&
            activePage.charAt(0).toUpperCase() + activePage.slice(1)}
        </title>
      </Head>

      <Navigation />

      <CollapseNav />

      <Menu active={activePage} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
