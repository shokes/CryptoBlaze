import React from 'react';
import {
  closeLoginModal,
  closeSignUpModal,
} from '../../redux/features/homeSlice';

import { useDispatch } from 'react-redux';

// fix the typings later
const ModalLayout = ({ children }: any) => {
  const dispatch = useDispatch();
  return (
    <div
      className='overlay'
      onClick={() => {
        dispatch(closeLoginModal());
        dispatch(closeSignUpModal());
      }}
    >
      <div
        className='fixed translate-x-1/2 right-1/2 rounded top-3 px-[22px] py-[48px]  bg-extraLightBlue  w-[384px] h-[580px] z-[999]'
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
