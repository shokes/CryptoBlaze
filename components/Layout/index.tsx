import React from 'react';
import Menu from '../Menu';
import Navigation from '../Navigation';
import { NextSeo } from 'next-seo';
import Footer from '../Footer';
import LayoutTypes from '../../interfaces/layoutTypes';
import { CustomCursor } from '../CustomCursor';
import CollapseNav from '../Navigation/CollapseNav';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';
import Progressbar from '../ProgressBar';

const Layout = ({ children, activePage }: LayoutTypes) => {
  const isTouchDevice = useIsTouchDevice();

  return (
    <div className='container'>
      {!isTouchDevice && <CustomCursor />}
      {!isTouchDevice && <Progressbar />}
      <NextSeo title={activePage} />

      <Navigation />

      <CollapseNav />

      <Menu active={activePage} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
