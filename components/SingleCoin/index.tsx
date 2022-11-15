import React from 'react';
import Image from 'next/image';
import SingleCoinTypes from '../../interfaces/SingleCoinTypes';

// to fix typings later
const SingleCoin = ({ coin }: SingleCoinTypes) => {
  // console.log(name, symbol, large);

  if (Object.entries(coin).length > 0) {
    const {
      name,
      symbol,
      image: { large },
      //  links: { subreddit_url, chat_url, homepage },
    } = coin;
    return (
      <div>
        <h4>{name}</h4>
        <div>
          <Image src={large} alt={name} width={30} height={30} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default SingleCoin;
