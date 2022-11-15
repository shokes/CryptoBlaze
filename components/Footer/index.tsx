import React from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo/CryptoBlazeLogo.png';
import Link from 'next/link';
import { FiGithub, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='pt-[64px] pb-[15px]'>
      <div
        className='flex
     justify-between items-base mb-[64px] '
      >
        <div className='w-[448px]'>
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
        <div className='flex flex-col'>
          <h2 className='mb-3 font-bold'>EXPLORE</h2>
          <Link href='/' className='mb-1 text-sm'>
            BITCOIN PRICE
          </Link>
          <Link href='/' className='mb-1 text-sm'>
            ETHEREUM PRICE
          </Link>
          <Link href='/' className='text-sm'>
            BNB PRICE
          </Link>
        </div>

        <div className='flex flex-col'>
          <h2 className='mb-3 font-bold'>NFTS</h2>
          <Link href='/' className='mb-1 text-sm'>
            NFTS
          </Link>
          <Link href='/' className='text-sm'>
            TRENDING COINS
          </Link>
        </div>
      </div>
      <div className='justify-center flex items-center gap-3 mb-[2rem]'>
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
    </footer>
  );
};

export default Footer;
