import React from 'react';
import Navigation from '../components/Navigation';
import Link from 'next/link';
import { BiRightArrow } from 'react-icons/bi';
import Footer from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import { openLoginModal } from '../redux/features/homeSlice';
import { openSignUpModal } from '../redux/features/homeSlice';
import { useDispatch } from 'react-redux';
import { useAuth } from '../context/AuthContext';
import { FadeIn } from '../components/Animations/fadeIn';
import { FadeInText } from '../components/Animations/fadeInText';
import { CustomCursor } from '../components/CustomCursor';
import CollapseNav from '../components/Navigation/CollapseNav';
import Homepage from '../public/Images/homepage.png';
import { useIsTouchDevice } from '../hooks/useIsTouchDevice';

const Portfolio = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const isTouchDevice = useIsTouchDevice();

  return (
    <section>
      <Head>
        <title>CryptoBlaze - Portfolio</title>
      </Head>
      <div className='container pb-4'>
        {' '}
        <Navigation />
        <CollapseNav />
      </div>
      <div className=' border-t mb-5 text-[#adb5bd]'></div>
      <div className='portfolio-container pb-[80px]'>
        <div className='flex items-center gap-1 font-semibold'>
          <Link href='/' className='text-blue'>
            Home
          </Link>
          <span>
            <BiRightArrow className='text-blue' />
          </span>
          <span>Portfolio</span>
        </div>

        <div className='flex flex-col-reverse lg:flex-row items-center gap-[20px] mt-[50px]'>
          <div className=''>
            <FadeIn>
              <h2 className='text-3xl font-bold lg:w-[400px] mb-[27px]'>
                Free & Powerful Crypto Portfolio Tracker
              </h2>

              <p className='lg:w-[528px] mb-[27px] text-lg'>
                Track your crypto earnings like a pro, with a user-friendly and
                reliable portfolio tracker that you can rely on
              </p>
            </FadeIn>

            {user ? (
              <Link
                href='/account'
                className='bg-blue py-2 w-[112px] px-6 border border-blue text-[#fff] rounded hover:bg-hover duration-150 ease-in-out'
              >
                View your portfolio
              </Link>
            ) : (
              <div>
                <div className='flex items-center gap-3 mb-5'>
                  <button
                    className='bg-blue py-2 w-[112px] px-6 border border-blue text-[#fff] rounded hover:bg-hover duration-150 ease-in-out'
                    onClick={() => {
                      dispatch(openSignUpModal());
                    }}
                  >
                    Sign Up
                  </button>
                  <button
                    className='hover:text-blue hover:border-[#000]  w-[112px] border py-2 px-6 rounded border-blue cursor-pointer duration-150 ease-in-out'
                    onClick={() => {
                      dispatch(openLoginModal());
                    }}
                  >
                    Login
                  </button>
                </div>
                <p className='text-lg'>
                  <FadeInText text='Start your portfolio now!' />
                </p>
              </div>
            )}
          </div>

          <Image
            src={Homepage}
            alt='preview of web app on macbook pro'
            width={550}
            height={550}
            placeholder='blur'
            className='top-[3rem]'
          />
        </div>
      </div>
      <div className='container'>
        <Footer />
      </div>
      {!isTouchDevice && <CustomCursor />}
    </section>
  );
};

export default Portfolio;
