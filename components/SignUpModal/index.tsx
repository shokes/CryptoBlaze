import React from 'react';
import ModalLayout from '../ModalLayout';
import { IoMdClose } from 'react-icons/io';
import {
  closeSignUpModal,
  openLoginModal,
} from '../../redux/features/homeSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const SignUpModal = () => {
  const dispatch = useDispatch();
  const [passwordLengthError, setPasswordLengthError] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const { signup } = useAuth();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();
    if (data.password.length < 7) {
      setPasswordLengthError(true);
      return;
    }

    try {
      setPasswordLengthError(false);
      await signup(data.email, data.password);
      dispatch(closeSignUpModal());
    } catch (e: any) {
      console.log(e.message);
      setErrorMessage(e.message);
    }
  };

  return (
    <ModalLayout>
      <div className='relative mt-[55px] lg:mt-0 '>
        <h2 className='font-bold text-xl mb-2'>
          IT&apos;S FREE! Track your favorite coin easily 🚀
        </h2>
        <p className='text-xs text-[#ced4da] mb-2'>
          By continuing, you agree to CryptoBlaze Terms of Service.
        </p>

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
              placeholder='Email'
              className='h-[42px] rounded border-blue bg-[#fff] border p-2 text-[#343a40]'
            />
          </div>

          <div
            className={`flex flex-col gap-2 ${
              errorMessage || passwordLengthError || 'mb-6'
            }`}
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
              className='h-[42px] rounded border border-blue p-2 bg-[#fff] text-[#343a40]'
            />
          </div>
          {passwordLengthError && (
            <p className='my-3 text-red text-xs'>
              Password should not be less than six characters
            </p>
          )}
          {errorMessage && (
            <p className='my-3 text-red text-xs'>{errorMessage}</p>
          )}
          <button
            className='bg-blue py-2 w-full border-blue border rounded text-[#fff] hover:bg-hover mb-6 duration-150 ease-in-out'
            type='submit'
          >
            Sign Up
          </button>
        </form>

        <p className='text-center text-sm'>
          Already have an account yet?{' '}
          <span
            className='text-blue cursor-pointer'
            onClick={() => dispatch(openLoginModal())}
          >
            Login
          </span>
        </p>
        <span
          className=' right-0 -top-[88px]  lg:-top-[32px] absolute '
          onClick={() => {
            dispatch(closeSignUpModal());
          }}
        >
          <IoMdClose className='w-[27px] h-[27px] text-text' />
        </span>
      </div>
    </ModalLayout>
  );
};

export default SignUpModal;
