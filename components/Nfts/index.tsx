import React from 'react';
import NftsTypes from '../../interfaces/nftsTypes';

const Nfts = ({ nftList }: NftsTypes) => {
  return (
    <section>
      <div className='mb-[40px]'>
        <h2 className='font-bold text-xl'>Trending NFTs</h2>
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
