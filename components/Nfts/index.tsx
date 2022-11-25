import React from 'react';
import NftsTypes from '../../interfaces/nftsTypes';
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

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Asset Platform</th>
            <th>Contact Address</th>
          </tr>
        </thead>

        <tbody>
          {nftList?.map((item, index) => {
            const { name, id, asset_platform_id, contract_address } = item;

            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{asset_platform_id}</td>
                <td>{contract_address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Nfts;
