import React from 'react';
import Layout from '../components/Layout';
import errorImage from '../public/Images/404.png';
import Image from 'next/image';

const Error = () => {
  const activepage = 'Error';
  return (
    <Layout activePage={activepage}>
      <div className='flex items-center  justify-center mb-5 w-[60rem] mx-auto'>
        <Image src={errorImage} alt='error' width={500} height={500} />
        <div className='text-center'>
          <p className='text-2xl font-semibold mb-3'>Aww... Don&apos;t weep.</p>
          <p className='text-lg mb-7'>it&apos;s just a 404 error!</p>
          <p>
            What you are looking for may have been misplaced in Long Term
            Memory.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
