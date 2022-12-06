import React from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo/CryptoBlazeLogo.png';
import Link from 'next/link';
import { FiGithub, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='pt-[64px] pb-[15px]'>
      <div
        className='flex flex-col lg:flex-row
     justify-between items-base mb-[54px] '
      >
        <div className='lg:w-[448px] mb-[32px] lg:mb-[0px]'>
          <Link
            href='/'
            className='flex gap-2 mb-3 items-center font-bold text-xl'
          >
            {' '}
            <Image src={Logo} width={50} height={50} alt='logo' /> CryptoBlaze
          </Link>{' '}
          <p className='text-sm'>
            CRYPTOBLAZE PROVIDES A FUNDAMENTAL ANALYSIS OF THE CRYPTO MARKET.
            CRYPTOBLAZE TRACKS PRICE, VOLUME AND MARKET CAPITALISATION.
          </p>
        </div>
        <div className='flex flex-col mb-[32px] lg:mb-[0px]'>
          <h2 className='mb-3 font-bold'>EXPLORE</h2>
          <Link
            href='/coins/bitcoin'
            className='mb-1 text-sm hover:underline underline-offset-2 hover:text-blue'
          >
            BITCOIN PRICE
          </Link>
          <Link
            href='/coins/ethereum'
            className='mb-1 text-sm hover:underline underline-offset-2 hover:text-blue'
          >
            ETHEREUM PRICE
          </Link>
          <Link
            href='/coins/binancecoin'
            className='text-sm hover:underline underline-offset-2 hover:text-blue'
          >
            BNB PRICE
          </Link>
        </div>

        <div className='flex flex-col'>
          <h2 className='mb-3 font-bold'>NFTS</h2>
          <Link
            href='/nft'
            className='mb-1 text-sm hover:underline underline-offset-2 hover:text-blue'
          >
            NFTS
          </Link>
          <Link
            href='/trending'
            className='text-sm hover:underline underline-offset-2 hover:text-blue'
          >
            TRENDING COINS
          </Link>
        </div>
      </div>
      <div className='justify-center flex items-center gap-3 mb-[16px]'>
        <a
          href='https://twitter.com/Airshokes'
          target='_blank'
          rel='noreferrer'
        >
          <FiTwitter className='text-blue' />
        </a>

        <a href='https://github.com/shokes' target='_blank' rel='noreferrer'>
          <FiGithub className='text-blue' />
        </a>
      </div>
      <p className='text-center text-sm'>
        DEVELOPMENT BY{' '}
        <a
          href='https://twitter.com/Airshokes'
          target='_blank'
          rel='noreferrer'
          className='hover:underline underline-offset-2 hover:text-blue  duration-150 ease-in-out'
        >
          OSHOKE
        </a>
      </p>
    </footer>
  );
};

export default Footer;
