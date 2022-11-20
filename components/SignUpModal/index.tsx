import React from 'react';
import ModalLayout from '../ModalLayout';
import { GrClose } from 'react-icons/gr';
import GoogleIcon from '../../public/Logo/images.png';
import Image from 'next/image';
import { closeSignUpModal } from '../../redux/features/homeSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const SignUpModal = () => {
  const dispatch = useDispatch();

  const { user, signup } = useAuth();
  console.log(user);

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      await signup(data.email, data.password);
    } catch (error) {
      console.log(error);
    }

    console.log(data);
  };

  return (
    <ModalLayout>
      <div className='relative'>
        <h2 className='font-bold text-xl mb-2'>
          IT&apos;S FREE! Track your favorite coin easily 🚀
        </h2>
        <span className='text-xs text-[#495057] '>
          By continuing, you agree to CryptoBlaze Terms of Service.
        </span>

        <div className='flex flex-col gap-4 mb-4'>
          <button className='flex mt-3 items-center gap-3 justify-center border py-2 border-blue hover:border-[#000] hover:text-blue  duration-150 ease-in-out rounded w-full'>
            <Image src={GoogleIcon} width={20} height={20} alt='google icon' />
            Continue with Google
          </button>

          <span className='text-center'>Or</span>
        </div>

        <form onSubmit={handleSignup}>
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
          <div className='flex flex-col gap-2 mb-6'>
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

          <button
            className='bg-blue py-2 w-full border-blue border rounded text-[#fff] hover:bg-hover mb-6 duration-150 ease-in-out'
            type='submit'
          >
            Sign Up
          </button>
        </form>

        <p className='text-center text-sm'>
          Already have an account yet?{' '}
          <span className='text-blue cursor-pointer'>Login</span>
        </p>
        <span
          className=' right-0 -top-[32px] absolute cursor-pointer'
          onClick={() => {
            dispatch(closeSignUpModal());
          }}
        >
          <GrClose className='w-[22.4px] h-[22.4px]' />
        </span>
      </div>
    </ModalLayout>
  );
};

export default SignUpModal;
