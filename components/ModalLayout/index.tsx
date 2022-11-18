import React from 'react';

// fix the typings later
const ModalLayout = ({ children }: any) => {
  return (
    <div>
      {/* <div className='overlay'></div> */}

      <div className='fixed translate-x-1/2 right-1/2 overlay rounded top-6 px-[22px] py-[48px]  bg-extraLightBlue  w-[27rem] h-[35rem] z-[999]'>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalLayout;
