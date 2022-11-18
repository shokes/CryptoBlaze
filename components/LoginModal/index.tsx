import React from 'react';
import ModalLayout from '../ModalLayout';
import { GrClose } from 'react-icons/gr';
import GoogleIcon from '../../public/Logo/images.png';
import Image from 'next/image';

// to fix typings later
const LoginModal = ({ setLoginModal }: any) => {
  return (
    <ModalLayout>
      <div className='relative  '>
        <h2 className='font-bold text-xl mb-[36.8px]'>
          Login to track your favorite coin easily 🚀
        </h2>
        <form
          action='
        '
        >
          <div className='flex flex-col gap-2 mb-6'>
            {' '}
            <label htmlFor='Email'>Email</label>
            <input
              type='text'
              placeholder='Email'
              className='h-[42px] rounded border-blue border p-2'
            />
          </div>
          <div className='flex flex-col gap-2 mb-6'>
            <label htmlFor='Password'>Password</label>
            <input
              type='text'
              placeholder='Password'
              className='h-[42px] rounded border border-blue p-2'
            />
          </div>
        </form>
        <div className='flex flex-col gap-3 mb-[32px]'>
          <button className='bg-blue py-2 w-full border-blue border rounded text-[#fff] hover:bg-hover  duration-150 ease-in-out'>
            Login
          </button>
          <span className='text-center'>Or</span>
          <button className='flex items-center gap-3 justify-center border py-2 hover:text-blue  duration-150 ease-in-out rounded w-full'>
            <Image src={GoogleIcon} width={20} height={20} alt='google icon' />
            Continue with Google
          </button>
        </div>
        <span
          className=' right-0 -top-[32px] absolute cursor-pointer'
          onClick={() => {
            setLoginModal(false);
          }}
        >
          <GrClose className='w-[22.4px] h-[22.4px]' />
        </span>
        <p className='text-center text-sm'>
          Don&apos;t have an account yet?{' '}
          <span className='text-blue cursor-pointer'>Sign Up</span>
        </p>
      </div>
    </ModalLayout>
  );
};

export default LoginModal;
