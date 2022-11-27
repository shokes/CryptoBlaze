import React from 'react';
import {
  closeLoginModal,
  closeSignUpModal,
} from '../../redux/features/homeSlice';
import LayoutTypes from '../../interfaces/layoutTypes';
import { useDispatch } from 'react-redux';
// className='overlay'
const ModalLayout = ({ children }: LayoutTypes) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(closeLoginModal());
        dispatch(closeSignUpModal());
      }}
    >
      <div
        className='fixed translate-x-1/2 right-1/2 rounded top-0 lg:top-3 px-[22px] py-[48px]  bg-extraLightBlue  w-full h-full lg:w-[384px] lg:h-[580px] z-[999]'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalLayout;
