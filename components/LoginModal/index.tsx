import React from 'react';
import ModalLayout from '../ModalLayout';
import { GrClose } from 'react-icons/gr';
import GoogleIcon from '../../public/Logo/images.png';
import Image from 'next/image';
import {
  closeLoginModal,
  openSignUpModal,
} from '../../redux/features/homeSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const LoginModal = () => {
  const dispatch = useDispatch();

  const { login, googleSignIn } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      await login(data.email, data.password);
    } catch (e: any) {
      console.log(e.message);
      setErrorMessage(e.message);
    }
  };

  return (
    <ModalLayout>
      <div className='relative  '>
        <h2 className='font-bold text-xl mb-[36.8px]'>
          Login to track your favorite coin easily 🚀
        </h2>
        <form onSubmit={handleLogin}>
          <div className='flex flex-col gap-2 mb-6'>
            {' '}
            <label htmlFor='Email'>Email</label>
            <input
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
              required
              type='Email'
              className='h-[42px] rounded border-blue border p-2'
            />
          </div>
          <div
            className={`flex flex-col gap-2 ${errorMessage ? null : 'mb-6'}`}
          >
            <label htmlFor='Password'>Password</label>
            <input
              onChange={(e: any) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              required
              type='password'
              placeholder='Password'
              className='h-[42px] rounded border border-blue p-2'
            />
          </div>
          {errorMessage && (
            <p className='my-3 text-red text-xs'>{errorMessage}</p>
          )}
          <div className='flex flex-col gap-3 mb-[32px]'>
            <button
              className='bg-blue py-2 w-full border-blue border rounded text-[#fff] hover:bg-hover  duration-150 ease-in-out'
              type='submit'
            >
              Login
            </button>
            <span className='text-center'>Or</span>
            <button
              className='flex items-center gap-3 justify-center border py-2 hover:text-blue   border-blue hover:border-[#000] duration-150 ease-in-out rounded w-full'
              onClick={googleSignIn}
            >
              <Image
                src={GoogleIcon}
                width={20}
                height={20}
                alt='google icon'
              />
              Continue with Google
            </button>
          </div>
        </form>

        <span
          className=' right-0 -top-[32px] absolute cursor-pointer'
          onClick={() => {
            dispatch(closeLoginModal());
          }}
        >
          <GrClose className='w-[22.4px] h-[22.4px]' />
        </span>
        <p className='text-center text-sm'>
          Don&apos;t have an account yet?{' '}
          <span
            className='text-blue cursor-pointer'
            onClick={() => dispatch(openSignUpModal())}
          >
            Sign Up
          </span>
        </p>
      </div>
    </ModalLayout>
  );
};

export default LoginModal;
