import React from 'react';
import Logo from '../../public/Logo/CryptoBlazeLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { navItems } from '../../routes';
import { useDispatch } from 'react-redux';
import { openLoginModal } from '../../redux/features/homeSlice';
import LoginModal from '../LoginModal';
import SignUpModal from '../SignUpModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FiGithub, FiTwitter } from 'react-icons/fi';

const CollapseNav = () => {
  const [open, setOpen] = useState(false);
  const { loginModal, signUpModal } = useSelector(
    (store: RootState) => store.home
  );
  const dispatch = useDispatch();
  const { user, logout, themeHandler, theme } = useAuth();
  return (
    <div className='relative lg:hidden'>
      <div className='flex items-center justify-between py-3'>
        <div>
          <FiMenu
            className='w-[2rem] h-[2rem] cursor-pointer'
            onClick={() => setOpen(true)}
          />
        </div>
        <Link href='/' className='flex gap-2 items-center font-bold text-xl'>
          {' '}
          <Image
            src={Logo}
            width={25}
            height={25}
            alt='logo'
            className='w-auto h-auto'
          />{' '}
          CryptoBlaze
        </Link>{' '}
        <div className='flex gap-7 items-baseline  '>
          {user ? (
            <Link href='/account'>
              <FaUserAlt className='w-[1.4rem] h-[1.4rem] ' />
            </Link>
          ) : (
            <div
              onClick={() => {
                dispatch(openLoginModal());
              }}
            >
              <FaUserAlt className='w-[1.4rem] h-[1.4rem] cursor-pointer' />
            </div>
          )}
        </div>
        {loginModal && <LoginModal />}
        {signUpModal && <SignUpModal />}
      </div>

      {open && (
        <div className=' px-4 w-full h-full  bg-extraLightBlue top-0 right-0 fixed left-0 z-30'>
          <div className='flex items-center justify-between py-3'>
            <div>
              <IoMdClose
                className='w-[2rem] h-[2rem] cursor-pointer'
                onClick={() => setOpen(false)}
              />
            </div>
            <Link
              href='/'
              className='flex gap-2 items-center font-bold text-xl'
            >
              {' '}
              <Image
                src={Logo}
                width={25}
                height={25}
                alt='logo'
                className='w-auto h-auto'
              />{' '}
              CryptoBlaze
            </Link>{' '}
            <div className='flex gap-7 items-baseline  '>
              {user ? (
                <Link href='/account'>
                  <FaUserAlt className='w-[1.4rem] h-[1.4rem] ' />
                </Link>
              ) : (
                <div
                  onClick={() => {
                    dispatch(openLoginModal());
                  }}
                >
                  <FaUserAlt className='w-[1.4rem] h-[1.4rem] cursor-pointer' />
                </div>
              )}
            </div>
          </div>

          {navItems.map((nav) => {
            const { title, id, subTitles } = nav;

            return (
              <div
                key={id}
                tabIndex={0}
                className='collapse collapse-arrow  bg-extraLightBlue text-text '
              >
                <div className='collapse-title text-xl font-medium  '>
                  {title}
                </div>
                <div className='collapse-content flex flex-col gap-2'>
                  {subTitles.map((sub) => {
                    return (
                      <Link href={sub.url} key={sub.title}>
                        {sub.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className='mt-[64px] mb-[32px] text-right'>
            {user ? (
              <button
                className='bg-blue  py-1 px-3 text-[#fff] rounded hover:bg-hover duration-150 ease-in-out'
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            ) : (
              <button
                className='bg-blue  py-1 px-3 text-[#fff] rounded hover:bg-hover duration-150 ease-in-out'
                onClick={() => {
                  dispatch(openLoginModal());
                }}
              >
                Login
              </button>
            )}
          </div>
          <div className='justify-center flex items-center gap-3 mb-[16px]'>
            <a
              href='https://twitter.com/Airshokes'
              target='_blank'
              rel='noreferrer'
            >
              <FiTwitter className='text-blue' />
            </a>

            <a
              href='https://github.com/shokes'
              target='_blank'
              rel='noreferrer'
            >
              <FiGithub className='text-blue' />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollapseNav;
