import React from 'react';
import Head from 'next/head';
import Navigation from '../Navigation';
import Menu from '../Menu';
import LayoutTypes from '../../interfaces/layoutTypes';

const Layout = ({ children, activePage }: LayoutTypes) => {
  return (
    <div className='container'>
      <Head>
        <title>CryptoBlaze - {activePage}</title>
      </Head>
      <Navigation />
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
