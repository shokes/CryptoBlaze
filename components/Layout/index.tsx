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
import Progressbar from '../ProgressBar';
//import { useIsomorphicLayoutEffect } from '@/hooks/use-layout-effect';

// const transitionAnimation: Variants = {
//   initial: {
//     opacity: 1,
//   },
//   animate: {
//     opacity: 0,
//     transition: {
//       duration: 1.5,
//       ease: 'anticipate',
//     },
//     transitionEnd: {
//       zIndex: -1,
//     },
//   },
//   exit: {
//     opacity: 1,
//   },
// };

const Layout = ({ children, activePage }: LayoutTypes) => {
  const router = useRouter();

  // useEffect(() => {
  //   const setViewHeight = () => {
  //     document.documentElement.style.setProperty(
  //       '--vh',
  //       window.innerHeight * 0.01 + 'px'
  //     );
  //   };

  //   window.addEventListener('resize', setViewHeight);
  //   setViewHeight();

  //   return () => {
  //     window.removeEventListener('resize', setViewHeight);
  //   };
  // }, []);

  return (
    <div className='container'>
      <CustomCursor />
      <Progressbar />
      <Head>
        <title>
          CryptoBlaze -{' '}
          {activePage &&
            activePage.charAt(0).toUpperCase() + activePage.slice(1)}
        </title>
      </Head>
      <Navigation />
      <Menu active={activePage} />
      {children}

      {/* <motion.div
        key={router.asPath}
        className='fixed inset-0 z-[100] flex flex-grow items-center justify-center bg-noir px-4 py-4'
        exit='exit'
        initial='initial'
        animate='animate'
        variants={transitionAnimation}
      /> */}
      <Footer />
    </div>
  );
};

export default Layout;
