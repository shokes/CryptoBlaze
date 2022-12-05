import React from 'react';
import NftsTypes from '../../interfaces/nftsTypes';
import { FadeIn } from '../Animations/fadeIn';
import { FadeInText } from '../Animations/fadeInText';
import Loading from '../Loading';

const Nfts = ({ nftList, loading }: NftsTypes) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <div className='mb-[40px]'>
        <h2 className='font-bold text-xl'>
          <FadeInText text='Trending NFTs' />{' '}
        </h2>
      </div>
      <div className='overflow-auto'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th className='nowrap '>Asset Platform</th>
              <th className='nowrap '>Contact Address</th>
            </tr>
          </thead>

          <tbody>
            {nftList?.map((item, index) => {
              const { name, id, asset_platform_id, contract_address } = item;

              return (
                <tr key={id}>
                  <td>
                    {' '}
                    <FadeIn>{index + 1}</FadeIn>
                  </td>
                  <td>
                    <FadeIn>{name}</FadeIn>
                  </td>
                  <td>
                    <FadeIn>{asset_platform_id}</FadeIn>
                  </td>
                  <td>
                    <FadeIn> {contract_address}</FadeIn>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Nfts;
