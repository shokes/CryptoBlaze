import React from 'react';
import Logo from '../../public/Logo/CryptoBlazeLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { navItems } from '../../routes';

const CollapseNav = () => {
  const [open, setOpen] = useState(false);
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
          <div>
            <FaUserAlt className='w-[1.4rem] h-[1.4rem] cursor-pointer' />
          </div>
          <div>
            {' '}
            <BsFillSunFill className='w-[1.4rem] h-[1.4rem] hover:text-blue cursor-pointer' />
          </div>
        </div>
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
              <div>
                <FaUserAlt className='w-[1.4rem] h-[1.4rem]' />
              </div>
              <div>
                {' '}
                <BsFillSunFill className='w-[1.4rem] h-[1.4rem] hover:text-blue' />
              </div>
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
        </div>
      )}
    </div>
  );
};

export default CollapseNav;
